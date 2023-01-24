import './Socials.css'

import LinkedinFilled from '@ant-design/icons/LinkedinFilled';
import GithubFilled from '@ant-design/icons/GithubFilled';
import GitlabFilled from '@ant-design/icons/GitlabFilled';

function Socials() {
    return (
        <div className='socials'>
            <span className="social-item">
                <LinkedinFilled style={{ fontSize: '48px', color: '#0A66C2'}}/>
            </span>
            <span className="social-item">
                <GithubFilled style={{ fontSize: '48px', color: '#171515'}}/>
            </span>
            <span className="social-item">
                <GitlabFilled style={{ fontSize: '48px', color: '#fca326'}}/>
            </span>
        </div>
    );
}

export default Socials;