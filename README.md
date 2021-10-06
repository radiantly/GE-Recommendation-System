# GE

### Usage

1. **Install dependencies:** `pip install -r requirements.txt`
2. **Generate the required CSV files:** Firstly, download `Data for Hackathon.xlsx` from the shared box and save it in this folder. Then, you can run `python3 genCSV.py`
3. **Creating a model on AWS Personalize**:
   - **Create an S3 bucket:** Create an S3 bucket with personalize in its name.
   - **Upload the 3 generated CSV files**
   - **Add the required bucket policy and create the role:** Open the `initRole.ipynb` notebook. Note that you will need to configure boto3 with your access key (check their docs). Once done, you can run all cells.
   - **Create AWS Personalize dataset group:** Go to AWS personalize in the AWS Management console and you can start doing stuff.
