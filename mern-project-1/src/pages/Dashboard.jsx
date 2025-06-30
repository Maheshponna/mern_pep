
// import { Link } from 'react-router-dom';
import LinksDashboard from './links/LinksDashboard';


function Dashboard({ userDetails, setUserDetails }) {
  

  return (
    <div className="container text-center">
      <LinksDashboard />
    </div>
  );
}

export default Dashboard;