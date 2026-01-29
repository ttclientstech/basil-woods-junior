
import os
import sys

try:
    from rembg import remove
    from PIL import Image
except ImportError:
    print("Please install required packages using: pip install rembg pillow")
    sys.exit(1)

def clean_image():
    # Paths
    # Paths
    input_path = os.path.join("src", "assets", "Images", "namaste-boy-real-raw.png")
    output_path = os.path.join("src", "assets", "Images", "namaste-boy-real.png")

    if not os.path.exists(input_path):
        print(f"Error: Input file not found at {input_path}")
        return

    print(f"Processing {input_path}...")
    
    try:
        # Open the image
        with open(input_path, 'rb') as i:
            input_data = i.read()
            
        # Remove background
        output_data = remove(input_data)
        
        # Save the result
        with open(output_path, 'wb') as o:
            o.write(output_data)
            
        print(f"Success! Background removed.")
        print(f"Saved to: {output_path}")
        
    except Exception as e:
        print(f"An error occurred: {str(e)}")

if __name__ == "__main__":
    clean_image()
