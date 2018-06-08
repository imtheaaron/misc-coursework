from flask import Flask, jsonify
import datetime as dt
import sqlalchemy
from sqlalchemy.orm import Session
from sqlalchemy.ext.automap import automap_base
from sqlalchemy import create_engine, func
import numpy as np


app = Flask(__name__)

#get the sqlalchemy engine set up
engine = create_engine('sqlite:///hawaii.sqlite', echo=False)
session = Session(engine)

#map the tables to classes to enable queries
Base = automap_base()
Base.prepare(engine, reflect=True)
Station = Base.classes.stations
Measurement = Base.classes.measurements


# ROUTES

#Welcome/Index page
@app.route("/")
def welcome():
    return (
        f"<H3>Want to know about some weather data for Hawaii? API details below:</H3>"
        f"<ul><li>View the amount of rain in the past year: /api/v1.0/precipitation</li>"
        f"<li>Get a list of all weather stations: /api/v1.0/stations</li>"
        f"<li>See recorded temperatures for the past year: /api/v1.0/tobs</li>"
        f"<li>Set a start date (YYYY-MM-DD), get min, average, and max temps after that date:/api/v1.0/YYYY-MM-DD</li>"
        f"<li>Set a start and end date (Start/End), get the min, average, and max temps for that date range: /api/v1.0/YYYY-MM-DD/YYYY-MM-DD</li></ul>"
        f"<br><br><img src='https://www.gohawaii.com/sites/default/files/styles/narrow_carousel_large/public/content-carousel-images/Napali_0.jpg?itok=CZaVBQdQ', width='800'>"
    )

#Return a list of the sum of precipitation data by date for the previous year
@app.route("/api/v1.0/precipitation")
def precipitation():
    year_ago = dt.date.today() - dt.timedelta(days=365)
    results = session.query(Measurement.date, func.sum(Measurement.prcp)).\
        filter(Measurement.date < dt.date.today(), Measurement.date > year_ago).\
        group_by(Measurement.date).order_by(Measurement.date).all()

    total_rain = []
    for x in range(len(results)):
        rain_dict = {}
        result = list(np.ravel(results[x]))
        rain_dict["date"] = result[0]
        rain_dict["total rain"] = result[1]
        total_rain.append(rain_dict)

    return jsonify(total_rain)



# Return a json list of stations from the dataset.
@app.route("/api/v1.0/stations")
def stations():
    results = session.query(Station.station_name).all()
    all_stations = list(np.ravel(results))

    return jsonify(all_stations)


# Return a json list of Temperature Observations (tobs) for the previous year
@app.route("/api/v1.0/tobs")
def temperatures():
    year_ago = dt.date.today() - dt.timedelta(days=365)
    results = session.query(Measurement.date, Measurement.tobs).\
    filter(Measurement.date > year_ago).\
    order_by(Measurement.date).all()

    temps = []
    for x in range(len(results)):
        temp_dict = {}
        temp_dict["date"] = results[x][0]
        temp_dict["temperature observed"] = results[x][1]
        temps.append(temp_dict)

    return jsonify(temps)


# Return a json list of the minimum temperature, the average temperature, and the max temperature 
# for a given start or start-end range.

# When given the start only, calculate TMIN, TAVG, and TMAX for all dates greater than and equal to the start date.

# When given the start and the end date, calculate the TMIN, TAVG, and TMAX for dates between 
# the start and end date inclusive.

@app.route("/api/v1.0/<start>")
def temp_forward(start):
    temps = session.query(func.min(Measurement.tobs), func.avg(Measurement.tobs), func.max(Measurement.tobs)).\
            filter(Measurement.date >= start).all()
    
    return jsonify(temps[0])

@app.route("/api/v1.0/<start>/<end>")
def temp_range(start, end):
    temps = session.query(func.min(Measurement.tobs), func.avg(Measurement.tobs), func.max(Measurement.tobs)).\
            filter(Measurement.date >= start, Measurement.date <= end).all()
    
    return jsonify(temps[0])

if __name__ == "__main__":
    app.run(debug=True)