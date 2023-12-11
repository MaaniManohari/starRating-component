import React, {useState ,useEffect} from "react";
//import { useNavigate } from "react-router-dom";
import "../Css/Rate.css";
import {  FaStar } from "react-icons/fa";

import axios from 'axios';


const Rate = () => {
  /*useEffect(()=>{
      const updateRate = async() =>{
      try{
          await axios.put("http://localhost:8081/boarding_house/rate_amount") 
          console.log("work")
          
        }catch(err){
            
          console.log("error")
          console.log(err)
        }
      }
      updateRate();
  },[])*/
  //const navigate = useNavigate();
 
const [ratedVal,setRatedval]=useState(0);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  //const [rate,rateCount]=useState("NO");
  //const [value,ratValue]=useState(0);

  const SendData=(rateValue)=>{
    
      axios
      .post("http://localhost:8081/rate/rate_amount", {
        value: rateValue
      })
      .then((response) => {
        console.log("Rating submitted successfully:", response.data);
        window.location.reload(true);
        
      })
      .catch((err) => {
        console.log("Error submitting rating:", err);
      });

  }
  useEffect(() => {
    axios
      .get(`http://localhost:8081/ratedvalue`)
      .then((res) => {
        console.log(res.data);
        
          setRatedval(res.data);
      
        console.log("Data is fetched successfully");
        //console.log(rating);
      })
      .catch((error) => {
        console.error("Error fetching data from backend:", error);
      });
      
  }, []);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const rateValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={rateValue}


            />
            <FaStar
              className="starStyle"
              color={rateValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onClick={() => { setRating(rateValue);console.log(rateValue);
                SendData(rateValue);
                
                 
              }}
              onMouseOver={() => setHover(rateValue)}
              onMouseLeave={() => setHover(null)}
              size={40}
            />

          </label>
        );

      })}
      <div>Rate Here</div>
      <div><br></br><br></br>
      {[...Array(5)].map((star,i)=>{
        const val=i+1;
      return(
      //<lable> 
        
        <FaStar 
        key={i+1}
        //className="starStyle" 
        color={val <= ratedVal ? "#ffc107":"#e4e5e9"}
         
        size={40}
        />
        //</lable>
        );
    
    })}
    </div>
    </div>
  );

};
export default Rate;