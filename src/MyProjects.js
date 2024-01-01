import './MyProjects.css';
import Addtask from './Addtask';

const MyProjects = () => {
    return (
        <div className='MyProjects-Main'>
            <div className='MyProjects-Nav'>
                <h1>My Projects</h1>
            </div>
            <div className='MyProjects-Tasks-Section'>
                <div className='MyProjects-Tasks'>
                    <div className='MyProjects-Todo'>
                        <button><li className='MyProjects-Todo-Heading'>To Do</li></button>
                        <Addtask />
                    </div>
                </div>
                <div className='MyProjects-Tasks'>
                    <div className='MyProjects-InProgress'>
                        <button><li className='MyProjects-InProgress-Heading'>In Progress</li></button>
                        <Addtask />
                    </div>
                </div>
                <div className='MyProjects-Tasks'>
                    <div className='MyProjects-InReview'>
                        <button><li className='MyProjects-InReview-Heading'>In Review</li></button>
                        <Addtask />
                    </div>
                </div>
                <div className='MyProjects-Tasks'>
                    <div className='MyProjects-Completed'>
                        <button><li className='MyProjects-Completed-Heading'>Completed</li></button>
                        <Addtask />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProjects;