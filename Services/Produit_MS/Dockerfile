# Dockerfile for ms_produit (Product Microservice)

# Step 1: Use a base image with Python
FROM python:3.9

# Step 2: Create a working directory for the app
WORKDIR /usr/src/app

# Step 3: Copy the requirements.txt and install dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Step 4: Copy the rest of the application files
COPY . .

# Step 5: Set environment variables for the microservice
ENV FLASK_APP=app.py
ENV FLASK_ENV=production
ENV FRONTEND_URL=http://frontend:3000
ENV PRODUCT_SERVICE_URL=http://ms_produit:3003
ENV CATEGORY_SERVICE_URL=http://categoriems:3002
ENV MONGO_URI=mongodb://mongodb:27017/produitdb

# Step 6: Expose the required port
EXPOSE 3003

# Step 7: Command to run the Flask app
CMD ["flask", "run", "--host=0.0.0.0", "--port=3003"]
