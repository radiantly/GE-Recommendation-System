from openpyxl import load_workbook
from faker import Faker

excel_file = "./Data for Hackathon.xlsx"

w = load_workbook(filename=excel_file)

sheet = w["Users"]

fake = Faker()

for i in range(1000):
    row = i + 2
    sheet[f"A{row}"] = 10000 + i
    sheet[f"B{row}"] = fake.first_name()
    sheet[f"C{row}"] = fake.last_name()
    sheet[f"D{row}"] = fake.ascii_company_email()
    sheet[f"E{row}"] = fake.phone_number()
    sheet[f"F{row}"] = fake.company() + " Hospital"

w.save(excel_file)
