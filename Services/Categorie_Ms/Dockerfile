# Use a base Python image
FROM python:3.9-slim

# Set working directory
WORKDIR /usr/src/app

# Upgrade pip and install dependencies
RUN pip install --upgrade pip

# Copy requirements.txt and install dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code
COPY . .

# Environment variables for Flask and inter-service communication
ENV FLASK_APP=app.py
ENV FLASK_ENV=production
ENV FRONTEND_URL=http://frontend:3000
ENV CATEGORY_SERVICE_URL=http://categoriems:3002

# Expose the port
EXPOSE 3002

# Start the Flask application
CMD ["flask", "run", "--host=0.0.0.0", "--port=3002"]
