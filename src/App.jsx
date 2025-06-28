import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'antd';

import bg from './assets/image 5.png';
import Turkey from './assets/Турция.png';
import Mal from './assets/Мальдивы.png';
import man from './assets/man.png';
import women from './assets/women.png';
import km from './assets/7250км.png';
import plus from './assets/Плюс.png';
import plus2 from './assets/Плюс (1).png';
import plus3 from './assets/Плюс (2).png';
import plus4 from './assets/Плюс (3).png';
import elip from './assets/Ellipse 2.png';
import elip2 from './assets/Ellipse 2 (1).png';
import frame1 from './assets/Frame 163.png';
import frame2 from './assets/Frame 163 (1).png';
import elip3 from './assets/Ellipse 2 (2).png';
import elip4 from './assets/Ellipse 2 (3).png';
import plane from './assets/Vector 1 (1).png';
import img1 from './assets/image 1604.png';
import arrow from './assets/Vector (2).png';
import arrow2 from './assets/image 1605.png';
import arrow3 from './assets/image 1604 (1).png';
import arrow4 from './assets/image 1605 (1).png';
import rus from './assets/RU@2x.png';
import set from './assets/logo-1_site-2048x545 1.png';
import whatsap from './assets/WhatsApp.png';
import telegram from './assets/Telegram.png';
import con from './assets/Container.png';

const App = () => {
  const api = 'https://685b9aba89952852c2da24aa.mockapi.io/newproject';
  const [user, setUser] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [editName, setEditName] = useState("");
  const [idx, setIdx] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addName, setAddName] = useState("");

  async function getUser() {
    try {
      const { data } = await axios.get(api);
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  async function deleteUser(id) {
    try {
      await axios.delete(`${api}/${id}`);
      getUser();
    } catch (error) {
      console.error(error);
    }
  }

  function openEditModal(el) {
    setEditModal(true);
    setEditName(el.name);
    setIdx(el.id);
  }

  async function editUser() {
    const updateUser = {
      name: editName,
    };
    try {
      await axios.put(`${api}/${idx}`, updateUser);
      getUser();
      setEditModal(false);
    } catch (error) {
      console.error(error);
    }
  }

  const open = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  async function addUser() {
    const newUser = {
      name: addName
    };
    try {
      await axios.post(api, newUser);
      getUser();
      handleCancel();
      setAddName("");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <img className='w-[100%] mb-[10vh] relative' src={bg} alt="Lujo BlackJet" />
      <div className='absolute top-[75vh] text-center left-[70vh]'>
        <h1 className='text-[40px] text-[white]'> <b>Полет на <span className='text-[#FFE55F]'>Lujo BlackJet</span></b></h1>
        <p className='text-[grey]'>Новейший самолёт, оборудованный 72 <br /> креслами только бизнес-класса</p>
      </div>
      
      <h1 className='text-[40px] ml-[12%] mb-[17vh]'>Lujo BlackJet доставляет путешественников в <b>Турцию</b> <br /> и на <b>Мальдивы:</b></h1>
      
      <img className='absolute z-2 w-[30%] top-[135.5vh] left-[20vh]' src={man} alt="Man" />
      <img className='w-[70%] mb-[10vh] ml-[12%] relative' src={Turkey} alt="Turkey" />
      <h1 className='ml-[12%]'>Рейсы проходят по маршруту Москва — Бодрум, аэропорт Milas Bodrum. <br />Максимальная частота вылетов в летний сезон — 5 раз в неделю.</h1>
      <ul className='list-disc my-[5vh] ml-[12%] pl-[20px]'>
        <li>Вылет <b>— 09:00</b></li>
        <li>Обратный вылет <b>в Москву — 16:10</b></li>
        <li>Возвращение <b>в столицу — 21:20</b></li>
      </ul>
      
      <img className='absolute z-2 w-[30%] top-[213.5vh] left-[20vh]' src={women} alt="Woman" />
      <img className='w-[70%] mt-[10vh] mb-[5vh] ml-[12%] relative' src={Mal} alt="Maldives" />
      <p className='pl-[12%]'>Полётная программа включает вылеты 2 раза в неделю, по средам и пятницам.</p>
      <ul className='list-disc my-[5vh] ml-[12%] pl-[20px]'>
        <li>Вылет <b>— 00:15</b></li>
        <li>Прибытие <b>в Москву — 16:10</b></li>
        <li>Возвращение <b>в столицу — 21:20</b></li>
      </ul>
      
      <h1 className='text-[45px] ml-[12%]'><b>Lujo BlackJet</b> — cтоит один раз оказаться в небе на борту уникального лайнера, и вам не захочется соглашаться на другие варианты. </h1>
      
      <div className='ml-[12%] my-[10vh] flex items-center gap-[15vh]'>
        <img src={km} alt="7250 km" />
        <h1 className='text-[25px]'><b>дальность полета</b> - что позволяет долететь <br /> до желаемого пункта назначения без пересадок</h1>
      </div>
      
      <p className='ml-[12%]'>Это Boeing 757−200, единственный в России самолёт, в котором нет экономического и бизнес-класса, только 72 <br />места бизнес-класса Точнее — Ultimate Business Class. А это значит, что вас ждет персональный подход, люксовые удобства и партнёрство с <br /> мировыми брендами.</p>
      
      <div className='my-[10vh] justify-center flex gap-[16vh]'>
        <img src={plus} alt="Plus" />
        <img src={plus2} alt="Plus" />
        <img src={plus3} alt="Plus" />
        <img src={plus4} alt="Plus" />
      </div>
      
      <img className='ml-[35vh]' src={plane} alt="Plane" />
      
      <div className='bg-[#3E403B] h-[1750px] mb-[15vh] text-white px-[12%] py-[10vh]'>
        <h1 className='text-[35px]'><b>Здесь Moët & Chandon, гаджеты Apple <br /> и косметические travel-наборы от Bvlgari.</b></h1>
        <p className='text-[grey] my-[5vh]'>Все кресла раскладываются в полноценное место для сна с помощью одного нажатия на панель управления, а также откидываются и фиксируются в положении для отдыха.Каждое сиденье оборудовано компактными лампами для чтения, розетками и USB, а также функцией массажа. Вам обязательно предложат мягкое одеяло, подушку под шею и голову, тапочки и маску для сна для комфортного отдыха.Мультимедийная система развлечений доступна на протяжении всего полёта. Фильмы, стендап-шоу, сериалы из коллекции Premier, мультфильмы для детей — выбирайте на свой вкус.На протяжении всего полета в вашем распоряжении планшеты iPad самой последней модели, а также наушники AirPods Max с активным шумоподавлением.</p>

        <div className='flex items-center gap-[5vh]'>
          <img src={elip} alt="Ellipse" />
          <div>
            <h1 className='text-[30px]'><b>Комфортный отдых</b></h1><br />
            <h1>Lujo BlackJet — это Boeing 757−200, оборудованный 72 креслами только бизнес-класса. Все сиденья раскладываются в полноценные места для сна, оснащены лампами для чтения, розетками и USB для гаджетов. Расслабиться помогут одеяла и мягкие подушки.</h1>
          </div>
        </div>

        <div className='flex items-center my-[17vh] gap-[5vh]'>
          <img src={elip2} alt="Ellipse" />
          <div>
            <h1 className='text-[30px]'><b>Современные гаджеты</b></h1><br />
            <h1>Lujo BlackJet — это Boeing 757−200, оборудованный 72 креслами только бизнес-класса. Все сиденья раскладываются в полноценные места для сна, оснащены лампами для чтения, розетками и USB для гаджетов. Расслабиться помогут одеяла и мягкие подушки.</h1>
          </div>
        </div>

        <p>Мультимедийная система развлечений доступна на протяжении всего полёта. Смотрите фильмы, стендап-шоу, сериалы из коллекции Premier, мультфильмы для детей — всё, что вам захочется. <br /><br />Гаджеты на борту — это планшеты iPad самой последней модели. А также наушники AirPods Max с активным шумоподавлением — с ними комфортный отдых и ощущение уединения в полёте обеспечены.</p>

        <img className='w-[100%] mt-[7vh]' src={frame1} alt="Frame" />
        <img className='w-[100%] mb-[7vh]' src={frame2} alt="Frame" />

        <div className='flex items-center my-[17vh] gap-[5vh]'>
          <img src={elip3} alt="Ellipse" />
          <div>
            <h1 className='text-[30px]'><b>Забота о себе</b></h1><br />
            <h1>Lujo BlackJet — это Boeing 757−200, оборудованный 72 креслами только бизнес-класса. Все сиденья раскладываются в полноценные места для сна, оснащены лампами для чтения, розетками и USB для гаджетов. Расслабиться помогут одеяла и мягкие подушки.</h1>
          </div>
        </div>

        <div className='flex items-center my-[17vh] gap-[5vh]'>
          <img src={elip4} alt="Ellipse" />
          <div>
            <h1 className='text-[30px]'><b>Специальное меню от поваров lujo</b></h1><br />
            <h1>За питание на борту отвечает шеф-повар. Для гостей готовят блюда ресторанного уровня из свежайших продуктов. Дополняют меню алкогольные и безалкогольные напитки премиум-класса, десерты и деликатесы, специальные блюда для детей и вегетарианцев.</h1>
          </div>
        </div>
      </div>
      
      <p className='ml-[12%] mb-[5vh] text-[40px]'><b>Меню на борту Lujo BlackJet</b></p>
      <div className='mx-[12%] flex items-center gap-[25vh]'>
        <div className='w-[35%]'>
          <div className='flex justify-between items-center'>
            <p>Завтрак</p>
            <img src={arrow} alt="Arrow" />
          </div><hr className='text-[grey] mb-[5vh] mt-[3vh]' />
          <div className='flex justify-between items-center'>
            <p>Обед</p>
            <img src={arrow} alt="Arrow" />
          </div><hr className='text-[grey] mb-[5vh] mt-[3vh]' />
          <div className='flex justify-between items-center'>
            <p>Детское меню</p>
            <img src={arrow} alt="Arrow" />
          </div><hr className='text-[grey] mb-[5vh] mt-[3vh]' />
          <div className='flex justify-between items-center'>
            <p>Вегетарианское меню</p>
            <img src={arrow} alt="Arrow" />
          </div><hr className='text-[grey] mb-[5vh] mt-[3vh]' />
          <div className='flex justify-between items-center'>
            <p>Вегетарианское меню</p>
            <img src={arrow} alt="Arrow" />
          </div><hr className='text-[grey] mb-[5vh] mt-[3vh]' />
        </div>
        <img className='w-[40%]' src={img1} alt="Menu" />
      </div>
      
      <p className='ml-[12%] my-[5vh] text-[40px]'><b>Регистрация и ожидание полёта</b></p>
      <div className='mx-[12%] flex items-center gap-[25vh]'>
        <img src={arrow2} alt="Arrow" />
        <p>Полёт на бизнес-джете — минимум спешки и ожиданий, максимум <br />привилегий и бережного отношения к вашему времени. Регистрация <br /> на борт происходит на отдельных стойках 101 и 102, так что в аэропорт <br /> Внуково можно прибыть всего за 1,5 часа до вылета. <br /><br /> После регистрации и сдачи багажа гостей ждёт отдых в бизнес<br /> -лаундже ART Lounge: шведский стол с закусками, напитки, Wi-Fi, душ, <br /> детский уголок, зона с массажными креслами, камера хранения <br /> для ручной клади и другие удобства<div className="br"><br /></div> При вылете из Бодрума лаундж также к вашим услугам — при входе <br /> в зону отдыха нужно лишь показать посадочный талон.</p>
      </div>
      
      <p className='ml-[12%] my-[5vh] text-[40px]'><b>Трансфер</b></p>
      <div className='mx-[12%] flex items-center gap-[25vh]'>
        <p>Полёт на бизнес-джете — минимум спешки и ожиданий, максимум <br />привилегий и бережного отношения к вашему времени. Регистрация <br /> на борт происходит на отдельных стойках 101 и 102, так что в аэропорт <br /> Внуково можно прибыть всего за 1,5 часа до вылета. <br /><br /> После регистрации и сдачи багажа гостей ждёт отдых в бизнес<br /> -лаундже ART Lounge: шведский стол с закусками, напитки, Wi-Fi, душ, <br /> детский уголок, зона с массажными креслами, камера хранения <br /> для ручной клади и другие удобства<div className="br"><br /></div> При вылете из Бодрума лаундж также к вашим услугам — при входе <br /> в зону отдыха нужно лишь показать посадочный талон.</p>
        <img src={arrow3} alt="Arrow" />
      </div>
      
      <p className='ml-[12%] my-[5vh] text-[40px]'><b>Можно на борт Lujo BlackJet с животными?</b></p>
      <div className='mx-[12%] flex items-center gap-[25vh]'>
        <img src={arrow4} alt="Arrow" />
        <p>Полёт на бизнес-джете — минимум спешки и ожиданий, максимум <br />привилегий и бережного отношения к вашему времени. Регистрация <br /> на борт происходит на отдельных стойках 101 и 102, так что в аэропорт <br /> Внуково можно прибыть всего за 1,5 часа до вылета. <br /><br /> После регистрации и сдачи багажа гостей ждёт отдых в бизнес<br /> -лаундже ART Lounge: шведский стол с закусками, напитки, Wi-Fi, душ, <br /> детский уголок, зона с массажными креслами, камера хранения <br /> для ручной клади и другие удобства<div className="br"><br /></div> При вылете из Бодрума лаундж также к вашим услугам — при входе <br /> в зону отдыха нужно лишь показать посадочный талон.</p>
      </div>
      
      <p className='ml-[12%] my-[5vh] text-[40px]'><b>Другие детали:</b></p>
      <ul className='list-disc my-[5vh] text-[orange] ml-[12%] pl-[20px]'>
        <li>Вылет <b>— 00:15</b></li>
        <li>Прибытие <b>в Москву — 16:10</b></li>
        <li>Возвращение <b>в столицу — 21:20</b></li>
      </ul>
      
      <p className='ml-[12%] my-[5vh] text-[40px]'><b>Отзывы о Lujo BlackJet</b></p>

      <Button type="primary" onClick={open} className='ml-[12%]'>
        Create new User
      </Button>
      
      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={addUser}
        onCancel={handleCancel}
      >
        <input value={addName} placeholder='addName' onChange={(e) => setAddName(e.target.value)} type="text" />
      </Modal>

      <Modal
        title="Edit Modal"
        open={editModal}
        onOk={editUser}
        onCancel={() => setEditModal(false)}
      >
        <input
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          type="text"
          placeholder="Edit Name"
        />
      </Modal>

      <div className='flex flex-wrap gap-[10vh] p-[20px]'>
        {user.map((el) => (
          <div key={el.id} className='w-[30%] border-[2px] rounded-[20px] p-[30px]'>
            <img src={el.avatar} alt="User Avatar" className="w-[50px] h-[50px] rounded-full my-2" />
            <h1><b>Norov</b></h1><hr className='my-[3vh]' />
            <p className='my-[4vh]'>{el.desc}</p>
            <div className='flex justify-between'>
              <button
                onClick={() => deleteUser(el.id)}
                className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700'>DELETE</button>
              <button
                onClick={() => openEditModal(el)}
                className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'>EDIT</button>
              <button
                onClick={() => editUser(el.id)}
                className='bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-500'>INFO</button>
            </div>
          </div>
        ))}
      </div>

      <div className='bg-[#3E403B] h-[1100px] my-[15vh] text-white px-[12%] py-[10vh]'>
        <h1 className='text-[40px]'><b>Лёгкий способ<br /> осуществить мечту</b></h1>
        <p className='my-[5vh]'>Заполните форму обратной связи, напишите ваши контакты и пожелания к туру. <br /> Мы свяжемся с вами в ближайшее время!</p>
        <div>
          <p className='text-[orange] mb-[3vh]'>Имя</p>
          <input className='w-[100%] border border-white rounded-[5px] p-[20px]' type="text" placeholder='Как к вам обращаться?' />
        </div>
        <div className='my-[7vh]'>
          <p className='text-[orange] mb-[3vh]'>Телефон</p>
          <div className='flex border border-white rounded-[5px] p-[20px] items-center gap-[3vh]'>
            <img src={rus} alt="Russia" />
            <p>+7</p>
            <input className='w-[100%]' type="text" placeholder='Как к вам обращаться?' />
          </div>
        </div>
        <div>
          <p className='text-[orange] mb-[3vh]'>Ваши пожелания</p>
          <textarea className='w-[100%] h-[170px] border border-white rounded-[5px] p-[20px]' type="text" placeholder='Как к вам обращаться?' />
        </div>
        <button className='bg-[orange] my-[5vh] text-white px-[5vh] py-[1vh] rounded-[7px]'>Отправить</button>
        <p className='text-[19.8px]'>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p>
      </div>

      <div className='flex gap-[29vh] pb-[7vh] justify-center items-center'>
        <div className='flex gap-[10vh]'>
          <div>
            <img src={set} alt="Logo" />
            <p className='text-[25px] mt-[5vh] text-blue-400'>Информация</p>
            <p>Контакты</p>
            <p>О компании</p>
            <p>Наши новости</p>
            <p>Клиентам</p>
            <p>Сервис</p>
            <p>Отзывы</p>
          </div>
          <div>
            <p className='text-[25px] text-blue-400'>Контакты</p>
            <div className='flex gap-[3vh] my-[2vh]'>
              <img src={whatsap} alt="WhatsApp" />
              <img src={telegram} alt="Telegram" />
            </div>
            <p><b>+ 7 (495) 374 77 88</b></p>
            <p>Москва, Лесная 8а <br /> (м. Белорусская)</p>
            <p>Парковка для клиентов <br /> турагентства "Бутик <br /> Путешествий"</p>
          </div>
        </div>
        <img src={con} alt="Container" />
      </div>
    </div>
  );
};

export default App;