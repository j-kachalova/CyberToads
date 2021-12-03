import face_recognition
import os
import imghdr
import sys

def images_filter(filepath):
	return filepath.lower().endswith(('.png', '.jpg', '.jpeg', '.tiff', '.bmp', '.gif'))

known_filepathes = []
for root, dirs, files in os.walk(sys.argv[1] + "/known"):
	for file in files:
		known_filepathes.append(os.path.join(root,file))
known_imagespathes = list(filter(images_filter, known_filepathes))
known_encodings = []
for imagepath in known_imagespathes:
	known_image = face_recognition.load_image_file(imagepath)
	known_encoding = face_recognition.face_encodings(known_image)[0]
	known_encodings.append(known_encoding)



unknown_filepathes = []
for root, dirs, files in os.walk(sys.argv[1] + "/unknown"):
	for file in files:
		unknown_filepathes.append(os.path.join(root,file))
unknown_images_pathes = list(filter(images_filter, unknown_filepathes))


output_destination = sys.argv[2]
output = open(output_destination + "/result.txt", "w")
for unknown_image_path in unknown_images_pathes:
	unknown_image = face_recognition.load_image_file(unknown_image_path)
	unknown_encoding = face_recognition.face_encodings(unknown_image)[0]
	
	result = face_recognition.compare_faces(known_encodings, unknown_encoding)
	output.write(os.path.basename(unknown_image_path))
	output.write(' ')
	output.write(str(result))
	output.write('\n')
output.close()

