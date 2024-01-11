# DayNightFunction

# Using XAMPP?

# CREATE A VIRTUAL HOST FILENAME = "httpd-vhosts.conf" 
<VirtualHost *:80>
    ServerName http://daynight.local
    DocumentRoot "/applications/XAMPP/xamppfiles/htdocs/daynight"
    <Directory "/applications/XAMPP/xamppfiles/htdocs/daynight">
        Options Indexes FollowSymLinks Includes execCGI
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>

# CREATE A VIRTUAL HOST FILENAME = "hosts" 
127.0.0.1 daynight.local #Local Site

# PHP - For keeping sessions
# JAVASCRIPT -  Button animations
# CSS -  THEME

# ===== CSS ======

# body is using two class 
# dark-background -  you can add your class for dark theme using this class  
# white-background -  you can add your class for dark theme using this class 
