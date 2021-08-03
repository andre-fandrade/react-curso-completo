# https://www.coingecko.com/pt/moedas/smooth-love-potion

# <span class="no-wrap"
# data-price-btc="0.0000070575326577007"
# data-coin-id="10366" data-coin-symbol="slp"
# data-target="price.price"
# data-price-previous="0.270760186670684">
# US$&nbsp;0,270760</span>

import requests
from bs4 import BeautifulSoup

url = 'https://poocoin.app/tokens/0xb27adaffb9fea1801459a1a81b17218288c097cc'

response = requests.get(url)
print(response.text)

# html = BeautifulSoup()
