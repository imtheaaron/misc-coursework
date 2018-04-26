USE sakila;

# display actor names
SELECT * FROM actor;

# create new column with first and last names of all actors
SELECT CONCAT(first_name, " ", last_name) AS Actor_Name FROM actor;

# find ID, fname, and lname of 'Joe'
SELECT actor_id, first_name, last_name
	FROM actor
	WHERE first_name = 'Joe';
    
# find all actors whose last name contains 'GEN'
SELECT * FROM actor
	WHERE last_name LIKE '%GEN%';

# find actors whose last names contain 'LI' and order rows by last name and then first name
SELECT * FROM actor
	WHERE last_name LIKE '%LI%'
    ORDER BY last_name, first_name;
    
# 	Using IN, display the country_id and country columns of the following countries: Afghanistan, Bangladesh, and China:
SELECT * FROM country;

SELECT country_id, country
	FROM country
	WHERE country IN ('Afghanistan', 'Bangladesh', 'China');
    
# Add a middle_name column to the table actor. Position it between first_name and last_name. Hint: you will need to specify the data type.
ALTER TABLE actor
	ADD middle_name VARCHAR(50);
    
#  You realize that some of these actors have tremendously long last names. Change the data type of the middle_name column to blobs.
ALTER TABLE actor
	MODIFY COLUMN middle_name BLOB;

# Now delete the middle_name column.
ALTER TABLE actor
	DROP COLUMN middle_name;

# List the last names of actors, as well as how many actors have that last name.
SELECT last_name FROM actor;

SELECT COUNT(last_name) FROM actor;

# List last names of actors and the number of actors who have that last name, but only for names that are shared by at least two actors
SELECT COUNT(last_name), last_name
	FROM actor
	GROUP BY last_name
	HAVING COUNT(last_name) >= 2;

# Oh, no! The actor HARPO WILLIAMS was accidentally entered in the actor table as GROUCHO WILLIAMS, the name of Harpo's second cousin's 
# husband's yoga teacher. Write a query to fix the record.
UPDATE actor
	SET first_name = 'HARPO'
	WHERE first_name = 'GROUCHO' AND last_name = 'WILLIAMS';

# Perhaps we were too hasty in changing GROUCHO to HARPO. It turns out that GROUCHO was the correct name after all! 
# In a single query, if the first name of the actor is currently HARPO, change it to GROUCHO. Otherwise, change the 
# first name to MUCHO GROUCHO, as that is exactly what the actor will be with the grievous error. BE CAREFUL NOT TO 
# CHANGE THE FIRST NAME OF EVERY ACTOR TO MUCHO GROUCHO, HOWEVER! (Hint: update the record using a unique identifier.)
UPDATE actor
	SET first_name = CASE
			WHEN first_name = 'HARPO'
			THEN 'GROUCHO'
			ELSE 'MUCHO GROUCHO'
			END
	WHERE actor_id = 172
;

SELECT * FROM actor
	WHERE actor_id = 172;
    
# You cannot locate the schema of the address table. Which query would you use to re-create it?
SHOW CREATE TABLE address;

# Use JOIN to display the first and last names, as well as the address, of each staff member. Use the tables staff and address:
SELECT * FROM address;

SELECT * FROM staff;

SELECT staff.first_name, staff.last_name, address.address
	FROM staff
    INNER JOIN address ON staff.address_id = address.address_id;

# Use JOIN to display the total amount rung up by each staff member in August of 2005. Use tables staff and payment.
SELECT * FROM payment;

SELECT staff.first_name, staff.last_name, SUM(payment.amount)
	FROM payment
    INNER JOIN staff ON staff.staff_id = payment.staff_id 
	WHERE payment_date BETWEEN '2005-08-01 00:00:01' AND '2005-08-31 23:59:59'
    GROUP BY staff.staff_id
;

# List each film and the number of actors who are listed for that film. Use tables film_actor and film. Use inner join.
SELECT * FROM film;
SELECT * FROM film_actor;

SELECT film.title, COUNT(film_actor.actor_id)
	FROM film
    INNER JOIN film_actor ON film.film_id = film_actor.film_id
    GROUP BY film.title;

# How many copies of the film Hunchback Impossible exist in the inventory system?
SELECT * FROM film WHERE title = 'HUNCHBACK IMPOSSIBLE';
SELECT * FROM inventory;

SELECT film.title, COUNT(inventory.film_id)
	FROM film
    INNER JOIN inventory ON film.film_id = inventory.film_id
    WHERE film.film_id = 439;

# Using the tables payment and customer and the JOIN command, list the total paid by each customer. List the customers alphabetically by last name:
SELECT * FROM customer;
SELECT * FROM payment;

SELECT customer.first_name, customer.Last_name, customer.customer_id, SUM(payment.amount)
	FROM payment
    INNER JOIN customer ON customer.customer_id = payment.customer_id
    GROUP BY customer.customer_id
    ORDER BY customer.last_name;

# The music of Queen and Kris Kristofferson have seen an unlikely resurgence. As an unintended consequence, films starting with the 
# letters K and Q have also soared in popularity. Use subqueries to display the titles of movies starting with the letters K and Q 
# whose language is English.
SELECT * FROM language;

SELECT * FROM film
WHERE title LIKE 'K%' OR title LIKE 'Q%' AND language_id = (
SELECT language_id FROM language WHERE name = 'English')
;

# Use subqueries to display all actors who appear in the film Alone Trip.
SELECT * FROM film_actor;
SELECT * FROM actor;
SELECT * FROM film;

SELECT first_name, last_name FROM actor
WHERE actor_id IN (
SELECT actor_id FROM film_actor WHERE film_id = (SELECT film_id FROM film WHERE title = 'ALONE TRIP')
);

# You want to run an email marketing campaign in Canada, for which you will need the names and email 
# addresses of all Canadian customers. Use joins to retrieve this information.

SELECT * FROM address;
SELECT * FROM city;
SELECT * FROM customer;
SELECT * FROM country;

SELECT customer.first_name, customer.last_name, customer.email
	FROM customer
	INNER JOIN address ON address.address_id = customer.address_id
	WHERE address.city_id IN 
		(SELECT city_id FROM city WHERE city.country_id = 
			(SELECT country_id FROM country WHERE country = 'CANADA'));
    
# Sales have been lagging among young families, and you wish to target all family movies for a promotion. Identify all movies 
# categorized as famiy films.

SELECT * FROM category;
SELECT * FROM film_category;
SELECT * FROM film;

SELECT title FROM film
WHERE film_id IN (SELECT film_id FROM film_category WHERE category_id = 
	(SELECT category_id FROM category WHERE name = 'FAMILY'));
    
# Display the most frequently rented movies in descending order.
SELECT * FROM rental;
SELECT * FROM inventory;
SELECT * FROM film;

SELECT film.title, COUNT(film.title) AS 'Number of Rentals'
	FROM inventory
    JOIN rental ON rental.inventory_id = inventory.inventory_id
    JOIN film ON film.film_id = inventory.film_id
	GROUP BY film.title
    ORDER BY COUNT(film.title) DESC;
    
# Write a query to display how much business, in dollars, each store brought in.
SELECT * FROM store;
SELECT * FROM payment;
SELECT * FROM rental;
SELECT staff_id FROM rental GROUP BY staff_id;

	# from examining the databases, there are only 2 unique staff IDs. The staff IDs are equal to the store IDs.
	# I could do a JOIN to connect these to the store IDs but that seems unnecessary/redundant with this dataset.
	# the code below has the join but it's the same as just pulling the sum from payment with a group by staff_id
SELECT payment.staff_id AS 'Store ID', SUM(payment.amount)
	FROM payment
    INNER JOIN store ON payment.staff_id = store.store_id
	GROUP BY store.store_id;
    
# Write a query to display for each store its store ID, city, and country.
SELECT * FROM city;
SELECT * FROM country;
SELECT * FROM address;

SELECT store.store_id, city.city, country.country
	FROM address
    JOIN store ON store.address_id = address.address_id
    JOIN city ON address.city_id = city.city_id
    JOIN country ON city.country_id = country.country_id;

# List the top five genres in gross revenue in descending order. 
# (Hint: you may need to use the following tables: category, film_category, inventory, payment, and rental.)
SELECT * FROM category;
SELECT * FROM film_category;
SELECT * FROM inventory; 
SELECT * FROM payment;
SELECT * FROM rental;

SELECT category.name, SUM(payment.amount)
	FROM category
    JOIN film_category ON film_category.category_id = category.category_id
    JOIN inventory ON film_category.film_id = inventory.film_id
    JOIN rental on rental.inventory_id = inventory.inventory_id
    JOIN payment ON payment.rental_id = rental.rental_id
	GROUP BY category.name
    ORDER BY SUM(payment.amount) DESC
    LIMIT 5;
    
#  In your new role as an executive, you would like to have an easy way of viewing 
# the Top five genres by gross revenue. Use the solution from the problem above to 
# create a view. If you haven't solved 7h, you can substitute another query to create a view.
CREATE VIEW top_5 AS
SELECT category.name, SUM(payment.amount)
	FROM category
    JOIN film_category ON film_category.category_id = category.category_id
    JOIN inventory ON film_category.film_id = inventory.film_id
    JOIN rental on rental.inventory_id = inventory.inventory_id
    JOIN payment ON payment.rental_id = rental.rental_id
	GROUP BY category.name
    ORDER BY SUM(payment.amount) DESC
    LIMIT 5;

# How would you display the view that you created in 8a?    
SELECT * FROM top_5;

# You find that you no longer need the view top_five_genres. Write a query to delete it.
DROP VIEW top_5;
