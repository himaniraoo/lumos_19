from flask import Flask, request, jsonify

app = Flask(__name__)

# Hardcoded responses to basic questions
responses = {
    "hi": "Hello! How can I assist you today?",
    "how are you?": "I'm just a bunch of code, but I'm doing great! How about you?",
    "what is your name?": "I'm your friendly AI chatbot!",
    "what can you do?": "I can answer simple questions and keep you company!",
    "bye": "Goodbye! Have a great day!",
    "default": "Sorry, I don't understand that. Could you ask something else?"
}

def get_response(user_input):
    user_input = user_input.lower()  # Convert input to lowercase
    return responses.get(user_input, responses["default"])  # Return response or default

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get("message")
    if not user_message:
        return jsonify({"error": "No message provided"}), 400
    
    response_message = get_response(user_message)
    return jsonify({"response": response_message})

if __name__ == '__main__':
    app.run(debug=True)
