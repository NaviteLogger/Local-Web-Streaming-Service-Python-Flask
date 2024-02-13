from flask import request, jsonify, current_app as app
import jwt
from functools import wraps
from app.users.models import User


# This function should be applied to routes that require authentication
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        # Check if the request contains an authorization header
        if "Authorization" in request.headers:
            token = request.headers["Authorization"].split(" ")[1]

        if not token:
            return jsonify({"error": "Missing authorization token"}), 403

        try:
            # Decode the token
            data = jwt.decode(token, app.config["SECRET_KEY"], algorithms=["HS256"])
            current_user = User.query.filter_by(id=data["user_id"]).first()
        except:
            return jsonify({"error": "Invalid token"}), 401

        return f(current_user, *args, **kwargs)

    return decorated