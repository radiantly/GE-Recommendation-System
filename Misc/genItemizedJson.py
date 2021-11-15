import json

import pandas as pd

df = pd.read_excel("Data for Hackathon New.xlsx", sheet_name="Products")
df.fillna(0)

products = {}

clean = lambda thingy: "" if thingy != thingy else thingy

for index, row in df.iterrows():
    products[row["ItemNo"]] = {
        "ITEM_NAME": clean(row["ItemName"]),
        "ITEM_CATEGORY": clean(row["Product Category"]),
        "ITEM_FAMILY": clean(row["Product Family"]),
        "ITEM_IMAGE_LINK": clean(row["Image Link"]),
        "ITEM_PRODUCT_LINK": clean(row["Product Link"]),
    }

with open("items.json", "w") as f:
    f.write(json.dumps(products))
