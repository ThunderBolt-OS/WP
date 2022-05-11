import requests

# getting code from repository using python requests

val = requests.get('https://raw.githubusercontent.com/ThunderBolt-OS/WP/main/Formvalidation/gautam/article.html').text
print(val)