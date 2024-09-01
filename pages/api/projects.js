import {getIronSession} from "iron-session";
import {IRON_SESSION_COOKIE, IRON_SESSION_SECRET} from "../../services/constants";
import {validateJWT} from "../../services/jwt_service";
import Project from "../../models/projects_schema";
import dbConnect from "../../services/db_middleware";

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '10mb'
        }
    }
}

export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            const session = await getIronSession(req, res, {
                password: IRON_SESSION_SECRET,
                cookieName: IRON_SESSION_COOKIE
            });
            const validJWT = validateJWT(session.token);
            if (!validJWT || !validJWT.valid || validJWT.valid === false) {
                return res.status(401).json({message: 'Unauthorized please login and try again!'});
            }

            await dbConnect();
            if (req.query && req.query.deleteProject) {
                const projectIdToDelete = req.query.deleteProject;
                const projectToDelete = await Project.findById(projectIdToDelete);
                if (!projectToDelete) {
                    return res.status(404).json({ message: 'Project not found' });
                }
                //const thumbnailPath = path.join(process.cwd(), 'public', 'projects', projectToDelete.thumbnail.replace("/projects/", ''));
                //fs.unlinkSync(thumbnailPath);
                // for (let imgStrPath of projectToDelete.images) {
                //     const imagePath = path.join(process.cwd(), 'public', 'projects', imgStrPath.replace("/projects/", ''));
                //     fs.unlinkSync(imagePath);
                // }
                await Project.findByIdAndDelete(projectIdToDelete);
                return res.status(200).json({ message: 'Project deleted successfully' });
            } else if (req.query && req.query.updateProject) {
                const projectIdToUpdate = req.query.updateProject;
                const existingProject = await Project.findById(projectIdToUpdate);
                if (!existingProject) {
                    return res.status(404).json({ message: 'Project not found' });
                }
                //const thumbnailPath = path.join(process.cwd(), 'public', 'projects', existingProject.thumbnail.replace("/projects/", ''));
                // fs.unlinkSync(thumbnailPath);
                // for (let imgStrPath of existingProject.images) {
                //     const imagePath = path.join(process.cwd(), 'public', 'projects', imgStrPath.replace("/projects/", ''));
                //     fs.unlinkSync(imagePath);
                // }
                //const thumbnailData = Buffer.from(req.body.thumbnail.replace("data:image/jpeg;base64,", ""), 'base64');
                //fs.writeFileSync(thumbnailPath, thumbnailData);

                let imagePaths = [];
                //let count = existingProject.thumbnail.split('/').slice(-1)[0].split('-')[0];
                for (const [index, image] of req.body.images.entries()) {
                    // const imagePath = path.join(process.cwd(), 'public', 'projects', count + '-image_' + (index + 1) +'.jpg');
                    // imagePaths.push("/projects/" + count + "-image_" + (index + 1) +".jpg")
                    // const imageData = Buffer.from(image.replace("data:image/jpeg;base64,", ""), 'base64');
                    // fs.writeFileSync(imagePath, imageData);
                    imagePaths.push(image);
                }
                await Project.findByIdAndUpdate(
                    projectIdToUpdate,
                    {
                        ...req.body,
                        thumbnail: req.body.thumbnail,
                        images: imagePaths
                    }
                );
                return res.status(200).json({ message: 'Project updated successfully' });
            } else {
                let projects = await Project.find();
                let count = 0;
                if (projects.length === 0) {
                    count = 1;
                } else {
                    count = projects.length + 1;
                }
                // Save binary data to files in the public folder
                //const thumbnailPath = path.join(process.cwd(), 'public', 'projects', count + '-thumbnail.jpg');
                //const thumbnailData = Buffer.from(req.body.thumbnail.replace("data:image/jpeg;base64,", ""), 'base64');
                //fs.writeFileSync(thumbnailPath, thumbnailData);

                let imagePaths = [];
                for (const [index, image] of req.body.images.entries()) {
                    //const imagePath = path.join(process.cwd(), 'public', 'projects', count + '-image_' + (index + 1) +'.jpg');
                    //imagePaths.push("/projects/" + count + "-image_" + (index + 1) +".jpg")
                    //const imageData = Buffer.from(image.replace("data:image/jpeg;base64,", ""), 'base64');
                    //fs.writeFileSync(imagePath, imageData);
                    imagePaths.push(image);
                }

                await Project.create({
                    ...req.body,
                    thumbnail: req.body.thumbnail,
                    images: imagePaths
                });
                return res.status(200).json({message: "OK"});
            }
        } else {
            await dbConnect();
            if (req.query && req.query.fetchProject) {
                let data = await Project.findById(req.query.fetchProject);
                return res.status(200).json(data);
            } else {
                let data = await Project.find().select('-images');
                return res.status(200).json(data);
            }
        }
    } catch (e) {
        console.error(e)
        return res.status(500).json({message: "Internal Server Error, please try again later!"});
    }
}
