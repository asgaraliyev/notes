cd /
cd home/cubics/Desktop/projects/rahat_mall/admin/
gnome-terminal --tab --title=admin -- bash -c "meteor"
cd /
cd home/cubics/Desktop/projects/rahat_mall/partner/
gnome-terminal --tab --title=partner -- bash -c "MONGO_URL=mongodb://localhost:3001/meteor meteor --port 5000"
cd /
cd home/cubics/Desktop/projects/rahat_mall/web/
gnome-terminal --tab --title=web -- bash -c "MONGO_URL=mongodb://localhost:3001/meteor meteor --port 4000"
cd /
cd home/cubics/Desktop/projects/rahat_mall/image-processing/
gnome-terminal --tab --title=image_blah_blah -- bash -c "MONGO_URL=mongodb://localhost:3001/meteor meteor --port 8080"




