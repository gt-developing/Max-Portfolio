import Spline from '@splinetool/react-spline';
import "../css/spline.css"

export default function App() {
  return (
    <div>
      
        <div id='stars'></div>
        <div id='stars2'></div>
     
      <Spline scene="https://prod.spline.design/0LFs292GS-DDASVY/scene.splinecode" className="spline-container"/>
    </div>
        
  );
}
