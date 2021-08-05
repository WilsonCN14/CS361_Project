# Name: Christina Wilson
# Date: 8/4/2021
# clock.py functions
#   - def clock
#       - Purpose: returns the current time in a {"time":updated_time} format
# Citation: https://www.programiz.com/python-programming/datetime/current-time
# Citation: https://www.geeksforgeeks.org/how-to-add-hours-to-the-current-time-in-python/

import flask
from flask import jsonify
from datetime import datetime, timedelta
import pytz

app = flask.Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'

# Purpose: Returns the current time in Hours:Minutes:Seconds
# Returns {"time": current_time}
@app.route('/', methods=['GET'])
def clock():
    # Grab timezones and times from client
    requested_tz = 'America/Chicago'
    requested_hours = 4
    requested_minutes = 30
    requested_seconds = 0

    # Convert all the requested time into seconds
    total_seconds = (requested_hours * 60 * 60) + (requested_minutes * 60) + requested_seconds

    # Calculate the time that will be sent
    tz = pytz.timezone(requested_tz)
    updated_date = datetime.now(tz) + timedelta(seconds = total_seconds)
    updated_time = updated_date.strftime("%H:%M:%S")
    
    # Return updated time
    result = {}
    result['time'] = updated_time
    return jsonify(result)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

# ToDoList:
#   - Grab timezones and requested time from client
#   - Convert to am and pm
