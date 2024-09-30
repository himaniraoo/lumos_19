from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
from load_data import fetch_career_data

# Load the pre-trained SentenceTransformer model
model = SentenceTransformer('all-MiniLM-L6-v2')

def get_embeddings(text_list):
    """Generate embeddings for a list of texts using the SentenceTransformer model."""
    return model.encode(text_list)

def match_careers_based_on_subjects(user_subjects):
    """Match user subjects with career options based on required subjects."""
    # Fetch all career data
    career_data = fetch_career_data()
    
    # Extract required subjects for each career
    career_subjects = [career[2] for career in career_data]  # career[2] is the 'required_subjects'
    
    # Get embeddings for career required subjects
    career_embeddings = get_embeddings(career_subjects)
    
    # Get embedding for user subjects
    user_subjects_text = ' '.join(user_subjects)  # Combine user subjects into a single string
    user_subjects_embedding = get_embeddings([user_subjects_text])[0]
    
    # Compute cosine similarity between user subjects and career required subjects
    similarities = cosine_similarity([user_subjects_embedding], career_embeddings)[0]
    
    # Rank careers by similarity
    ranked_indices = np.argsort(similarities)[::-1]  # Sort indices by similarity in descending order
    
    # Prepare a list of the top 3 careers with their required subjects and similarity scores
    top_careers = []
    for idx in ranked_indices[:3]:  # Get top 3 careers
        top_careers.append({
            'career_name': career_data[idx][1],  # career[1] is 'career_name'
            'required_subjects': career_data[idx][2],  # career[2] is 'required_subjects'
            'similarity_score': similarities[idx]
        })
    
    return top_careers
