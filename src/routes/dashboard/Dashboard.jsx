import './dashboard.css';
import Header from '../../components/navigation/Header';

function Dashboard({ userUsername, setIsLoggedIn }) {
  return(
    <div className='dashboard-container'>
      <Header userUsername={userUsername='FallenAlbaz'} setIsLoggedIn={setIsLoggedIn} />
    </div>
  )
}

export default Dashboard;
