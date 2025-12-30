# Stage 1: Build dependencies
FROM composer:2 AS composer
WORKDIR /app
COPY composer.json composer.lock* ./
RUN composer install --no-dev --optimize-autoloader

# Stage 2: PHP app
FROM php:8.2-apache AS runner
WORKDIR /var/www/html
COPY --from=composer /app/vendor ./vendor
COPY . .
RUN docker-php-ext-install pdo pdo_sqlite
RUN chown -R www-data:www-data /var/www/html
RUN php artisan key:generate
RUN php artisan migrate --force
EXPOSE 80
CMD ["apache2-foreground"]