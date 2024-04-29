import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { useNavigate, useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

function SinglePage() {
  const post = useLoaderData();
  const [saved, setSaved] = useState(post.isSaved);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
    }
    // AFTER REACT 19 UPDATE TO USEOPTIMISTIK HOOK
    setSaved((prev) => !prev);
    try {
      await apiRequest.post("/users/save", { postId: post.id });
    } catch (err) {
      console.log(err);
      setSaved((prev) => !prev);
    }
  };

  const alquilar = async () => {
     try{
        await apiRequest.get('/users/lease');
        
        navigate("/nosotros");
       
     }catch(error){
      console.log(error);
     }
  }

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
         <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{post.address}</span>
                </div>
                <div className="price">$ {post.price}</div>
              </div>
              <div className="user">
                <img src={post.user.avatar} alt="" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDetail.desc),
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilidades</span>
                {post.postDetail.utilities === "owner" ? (
                  <p>El Dueño es Responsable</p>
                ) : (
                  <p>Arrendatario es Responsable</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Politica de Mascotas</span>
                {post.postDetail.pet === "allowed" ? (
                  <p>Mascotas Permitidas</p>
                ) : (
                  <p>Mascotas no Permitidas</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Política de Ingresos</span>
                <p>{post.postDetail.income}</p>
              </div>
            </div>
          </div>
          <p className="title">Dimensiones</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>{post.postDetail.size} mt²</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>{post.bedroom} Habitaciones</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>{post.bathroom} Baños</span>
            </div>
          </div>
          <p className="title">Lugares Cercanos</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>Escuela</span>
                <p>
                  a {post.postDetail.school > 999
                    ? post.postDetail.school / 1000 + "km"
                    : post.postDetail.school + "m"}{" "}
                  
                </p>
              </div>
            </div>
            <div className="feature">
              <img src="/hospital.jpg" alt="" />
              <div className="featureText">
                <span>Hospital</span>
                <p>a {post.postDetail.bus}m </p>
              </div>
            </div>
            <div className="feature">
              <img src="/iglesia.webp" alt="" />
              <div className="featureText">
                <span>Parque Principal</span>
                <p>a {post.postDetail.restaurant}m </p>
              </div>
            </div>
          </div>
          <p className="title">Ubicacion</p>
          <div className="mapContainer">
            <Map items={[post]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Enviar Mensaje
            </button>
            <button
              onClick={handleSave}
              style={{
                backgroundColor: saved ? "#fece51" : "white",
              }}
            >
              <img src="/save.png" alt="" />
              {saved ? "Lugar Guardado" : "Guardar Lugar"}
            </button>
          </div>
        </div>
      <button 
       onClick={()=> alquilar()}
      className="btn">Alquilar</button>
      </div>
    </div>
  );
}

export default SinglePage;
