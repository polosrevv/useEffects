import { Link } from 'react-router'

function About() {
    return (
        <div>
            <p>The club has been running since 2025.</p>
            <p>Our proudest members:</p>
            <ul>
                <li><Link to="/members/John Doe">John Doe</Link></li>
                <li><Link to="/members/Jane Smith">Jane Smith</Link></li>
                <li><Link to="/members/Steven Gonell">Steven Gonell</Link></li>
            </ul>
        </div>
    );
}

export default About;