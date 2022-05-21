import Navbar from '../navbar';
import Items from '../items';
import Dungeons from '../dungeons';

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Items />
        <Dungeons />
      </div>
    </>
  );
}
