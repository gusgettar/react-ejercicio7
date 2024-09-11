import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmpleadoList from '../components/EmpleadoList';

const App = () => {

  let empleados = [
    { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business",
    pic: "https://img.freepik.com/foto-gratis/avatar-androgino-persona-queer-no-binaria_23-2151100270.jpg?w=740&t=st=1725560004~exp=1725560604~hmac=f9e74f0fab42a8cbf45cd44203dc42c528f7ca3b6617271ff5285fa7a798dee0" },
    { id: 2, fullName: "Astryd Vallés", title: "CMO", department:
    "Marketing", pic: "https://img.freepik.com/foto-gratis/avatar-androgino-persona-queer-no-binaria_23-2151100221.jpg?w=740&t=st=1725560042~exp=1725560642~hmac=8bbdec7ceaa9af81dbd7d53bc569483048f6a9bcdebda751637b06280ae3cd06" },
    { id: 3, fullName: "Shantell Meza", title: "CFO", department:
    "Business", pic: "https://img.freepik.com/foto-gratis/avatar-androgino-persona-queer-no-binaria_23-2151100226.jpg?w=740&t=st=1725560069~exp=1725560669~hmac=c57851adc09d75b35082b82c1c2aa72791c69207efc2739e433886612662c9e4" },
    { id: 4, fullName: "Sergio Ocampo", title: "CTO", department:
    "Engineering", pic: "https://img.freepik.com/foto-gratis/personaje-dibujos-animados-bolso-gafas-sol_71767-99.jpg?w=740&t=st=1725560106~exp=1725560706~hmac=b9ccfb04f1f46bffb51aca823ed2b782336a043b8fd523f6247c861f564e3a37" },
    { id: 5, fullName: "Ares Jiménez", title: "Art Director", department:
    "Marketing", pic: "https://img.freepik.com/foto-gratis/representacion-3d-avatar-llamada-zoom_23-2149556777.jpg?w=900&t=st=1725560127~exp=1725560727~hmac=87487ad8bba3ce1465fe6d9fe76880b0d1bce33ea47cf3044132832e6d0ed37e" },
    { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department:
    "Engineering", pic: "https://img.freepik.com/foto-gratis/representacion-3d-avatar-llamada-zoom_23-2149556787.jpg?w=900&t=st=1725560146~exp=1725560746~hmac=55fa056b1a5625c04a09fd687c63f0e275cdf235311c37f58f29911756998d1d" },
    { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist",
    department: "Marketing", pic: "https://img.freepik.com/foto-gratis/personaje-estilo-dibujos-animados-3d_23-2151034097.jpg?w=740&t=st=1725560166~exp=1725560766~hmac=8e55813843893f6e5ac141aea35743412f6c103b6c8a8928a01fb035bb2d10c5" },
    { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department:
    "Engineering", pic: "https://img.freepik.com/foto-gratis/avatar-androgino-persona-queer-no-binaria_23-2151100205.jpg?w=740&t=st=1725560196~exp=1725560796~hmac=a386c4f7135e4f688e571a33c1280ed43f9576ee27f6f7cec45b979918760d0d" },
    { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department:
    "Engineering", pic: "https://img.freepik.com/foto-gratis/ilustracion-3d-joven-empresario-gafas-barba_1142-51491.jpg?w=740&t=st=1725560220~exp=1725560820~hmac=e9c6f21d1f5b145da2ab64a68ac924d3cd5c4bdf1e9e329df33c377373123218" },
    ]
  return (
   
   <div className='d-flex flex-row justify-content-center flex-wrap'>
      <EmpleadoList   empleado={empleados}/>

   </div>
  
   
  );
};

export default App;