import pandas as pd
import numpy as np
import random
import time

SHEET = "Data for Hackathon.xlsx"

users_df = pd.read_excel(SHEET, sheet_name="Users")

# Create USERS.csv
users_df.drop(columns=["Hospital", "Phone"], inplace=True)
users_df.rename(columns={"UserId": "USER_ID", "First Name" : "FIRST_NAME", "Last Name": "LAST_NAME", "Email": "EMAIL"}, inplace=True)
users_df.set_index("USER_ID", inplace=True)

print(users_df)

users_df.to_csv("USERS.csv")

# Create ITEM_METADATA.csv
products_df = pd.read_excel(SHEET, sheet_name="Products")
products_df.drop(columns=["Product Category", "Manufacturer", "Image Link", "Product Link"], inplace=True)
products_df.rename(columns={"ItemNo": "ITEM_ID", "ItemName": "ITEM_NAME", "Product Family": "ITEM_FAMILY", "Product Overview": "ITEM_OVERVIEW"}, inplace=True)
products_df.set_index("ITEM_ID", inplace=True)

# Remove commas as this may conflict with the csv
cols = ["ITEM_NAME", "ITEM_FAMILY", "ITEM_OVERVIEW"]
products_df[cols] = products_df[cols].replace({',': ''}, regex=True)
print(products_df)

products_df.to_csv("ITEM_METADATA.csv")

# Generate USER_INTERACTIONS.csv
iterations = 25000
rows_generated = 0
user_ids = users_df.index.values
item_ids = products_df.index.values

interaction_headers = ["USER_ID", "ITEM_ID", "ACTION", "TIMESTAMP"]

interaction_time = int(time.time())

with open("USER_INTERACTIONS.csv", "w") as f:
    f.write(",".join(interaction_headers) + "\n")

    def writeRow(*args):
        global interaction_time, rows_generated
        interaction_time += random.randrange(1, 300)
        row = list(args) + [str(interaction_time)]
        rows_generated += 1
        f.write(",".join(row) + "\n")

    for i in range(iterations):
        print(f"\rRows generated: {rows_generated}", end="", flush=True)

        # Pick a random person
        chosen_user_id = str(np.random.choice(user_ids))

        # Pick a random item
        chosen_item_id = str(np.random.choice(item_ids))

        # Write record
        writeRow(chosen_user_id, chosen_item_id, "CLICKED")

        while True:
            next_action = random.choices(["OPENED", "NAVIGATED_AWAY", "CLOSED"], cum_weights=[0.7, 0.9, 1])[0]
            if next_action == "NAVIGATED_AWAY":
                # Pick a new item id
                chosen_item_id = str(np.random.choice(item_ids))
                writeRow(chosen_user_id, chosen_item_id, "CLICKED")
            else:
                break

        if next_action == "CLOSED":
            continue
            
        # User opened item
        writeRow(chosen_user_id, chosen_item_id, next_action)

        next_action = random.choices(["ADDED_TO_CART", "CLOSED"], cum_weights=[0.1, 1])[0]
        if next_action == "CLOSED":
            continue

        # User added to cart
        writeRow(chosen_user_id, chosen_item_id, next_action)

        next_action = random.choices(["PURCHASED", "CLOSED"], cum_weights=[0.5, 1])[0]

        # User has purchased item
        writeRow(chosen_user_id, chosen_item_id, next_action)
