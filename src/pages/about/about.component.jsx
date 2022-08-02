import React, { useEffect } from "react";

import "./about.styles.scss";

import img1 from "../../assets/about1.jpg";
import img2 from "../../assets/about2.jpg";
import img3 from "../../assets/about3.jpg";
import img4 from "../../assets/about4.jpg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      <h1>Про нас</h1>
      <p>
        Баскетбольний клуб «Тигри» заснована 7 червня 2017 року. На сьогоднішній
        день в його структуру входить доросла чоловіча команда, яка під брендом
        БК «Тигри» представлятимуть Чернівецьку область у Чемпіонатах та Кубку
        України. Серед глобальних завдань клубу – це об’єднати увесь
        чернівецький баскетбол та створити «піраміду», до якої увійдуть дитячі,
        юнацькі, студентські, аматорські колективи, а також баскетбол 3х3,
        вершиною будуть саме дорослі професійні команди, де гратимуть найкращі
        вихованці Чернівецького баскетболу.
      </p>
      <img src={img1} alt="basketball game" className="float-left" />
      <p>
        Вони винні так само, як і ті, хто через душевну слабкість, тобто через
        бажання уникнути страждань і болю відмовляється від виконання свого
        обов’язку. Втім, тут дуже легко і просто провести відмінності, тому що,
        коли ми вільні і нам надана повна можливість вибору бажаного, коли ніщо
        не заважає нам робити те, що нам більше подобається, будь яку насолоду
        слід визнати бажаним, а будь-яке страждання огидним.
      </p>
      <p>
        Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей, цуратись
        насолоди і вихваляти страждання, я розкрию перед вами всю картину і
        роз’ясню, що саме говорив цей чоловік, який відкрив істину, якого я б
        назвав зодчим щасливого життя. Дійсно, ніхто не відкидає, не зневажає,
        не уникає насолод тільки через те, що це насолоди, але лише через те, що
        тих, хто не вміє розумно вдаватися насолоді, осягають великі страждання.
        Так само як немає нікого, хто полюбивши, вважав за краще і зажадав би
        саме страждання тільки за те, що це страждання, а не тому, що інший раз
        виникають такі обставини, коли страждання і біль приносять якесь і
        чималу насолоду. Якщо скористатися найпростішим прикладом, то хто з нас
        став би займатися якими б то не було тяжкими фізичними вправами, якщо б
        це не приносило з собою якоїсь користі? І хто міг би по справедливості
        дорікнути прагнення до насолоди, яке не несло б з собою ніяких
        неприємностей, або того, хто уникав би такого страждання, яке не
        приносило б з собою ніякої насолоди?
      </p>
      <p>
        Ми цураємось і вважаємо, що заслуговують справедливого обурення ті, хто,
        піддався звабі і розбещеним спокусам, які дають їм насолоду, і без тями
        від пристрасті не передбачили, яких страждань і які нещастя на них
        чекають. Вони винні так само, як і ті, хто через душевну слабкість,
        тобто через бажання уникнути страждань і болю відмовляється від
        виконання свого обов’язку. Втім, тут дуже легко і просто провести
        відмінності, тому що, коли ми вільні і нам надана повна можливість
        вибору бажаного, коли ніщо не заважає нам робити те, що нам більше
        подобається, будь яку насолоду слід визнати бажаним, а будь-яке
        страждання огидним. Але при деяких обставинах – або на вимогу боргу, або
        в силу якоїсь необхідності часто доводиться забувати про насолоди і не
        втікати від тягарів. Тому мудрець дотримується в цьому випадку
        наступного принципу вибору – або, відмовляючись від задоволення, він
        отримує якісь інші і навіть великі насолоди, або, зазнаючи страждання,
        він позбавляється від більш жорстоких.
      </p>
      <img src={img2} alt="basketball game" className="float-right" />
      <p>
        Виникає це хибне уявлення людей, цуратись насолоди і вихваляти
        страждання, я розкрию перед вами всю картину і роз’ясню, що саме говорив
        цей чоловік, який відкрив істину, якого я б назвав зодчим щасливого
        життя. Дійсно, ніхто не відкидає, не зневажає, не уникає насолод тільки
        через те, що це насолоди, але лише через те, що тих, хто не вміє розумно
        вдаватися насолоді, осягають великі страждання. Так само як немає
        нікого, хто полюбивши, вважав за краще і зажадав би саме страждання
        тільки за те, що це страждання, а не тому, що інший раз виникають такі
        обставини, коли страждання і біль приносять якесь і чималу насолоду.
        Якщо скористатися найпростішим прикладом, то хто з нас став би займатися
        якими б то не було тяжкими фізичними вправами, якщо б це не приносило з
        собою якоїсь користі? І хто міг би по справедливості дорікнути прагнення
        до насолоди, яке не несло б з собою ніяких неприємностей, або того, хто
        уникав би такого страждання, яке не приносило б з собою ніякої насолоди?
      </p>
      <p>
        Розкрию перед вами всю картину і роз’ясню, що саме говорив цей чоловік,
        який відкрив істину, якого я б назвав зодчим щасливого життя. Дійсно,
        ніхто не відкидає, не зневажає, не уникає насолод тільки через те, що це
        насолоди, але лише через те, що тих, хто не вміє розумно вдаватися
        насолоді, осягають великі страждання. Так само як немає нікого, хто
        полюбивши, вважав за краще і зажадав би саме страждання тільки за те, що
        це страждання, а не тому, що інший раз виникають такі обставини, коли
        страждання і біль приносять якесь і чималу насолоду.
      </p>
      <p>
        Звідки виникає це хибне уявлення людей, цуратись насолоди і вихваляти
        страждання, я розкрию перед вами всю картину і роз’ясню, що саме говорив
        цей чоловік, який відкрив істину, якого я б назвав зодчим щасливого
        життя. Дійсно, ніхто не відкидає, не зневажає, не уникає насолод тільки
        через те, що це насолоди, але лише через те, що тих, хто не вміє розумно
        вдаватися насолоді, осягають великі страждання.
      </p>
      <p>
        Дійсно, ніхто не відкидає, не зневажає, не уникає насолод тільки через
        те, що це насолоди, але лише через те, що тих, хто не вміє розумно
        вдаватися насолоді, осягають великі страждання. Так само як немає
        нікого, хто полюбивши, вважав за краще і зажадав би саме страждання
        тільки за те, що це страждання, а не тому, що інший раз виникають такі
        обставини, коли страждання і біль приносять якесь і чималу насолоду.
        Якщо скористатися найпростішим прикладом, то хто з нас став би займатися
        якими б то не було тяжкими фізичними вправами, якщо б це не приносило з
        собою якоїсь користі? І хто міг би по справедливості дорікнути прагнення
        до насолоди, яке не несло б з собою ніяких неприємностей, або того, хто
        уникав би такого страждання, яке не приносило б з собою ніякої насолоди?
      </p>
      <img src={img3} alt="basketball game" className="float-left" />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
        consequatur, non magni libero temporibus minus inventore fugit omnis? Id
        numquam dolorum ex qui. Officiis laborum voluptates, deleniti cum ipsum
        saepe? Aliquid obcaecati nam cupiditate, laudantium repellat quam minus?
        Odio, velit quos aliquam, distinctio harum sint ea dolore saepe sapiente
        quisquam ipsa veritatis sequi reprehenderit vitae laboriosam mollitia
        laborum minus placeat?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, sit
        aspernatur ad fugiat praesentium inventore modi optio in rem illo, quia
        eum? Et iusto itaque quidem temporibus dolore possimus tempore.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
        adipisci soluta, dolore optio aliquam nemo explicabo non veritatis ab!
        Magni ipsum doloribus quod libero corporis labore earum dolorem, aut
        delectus. Voluptas animi facilis ipsum, cupiditate excepturi deserunt
        fuga sint quas, veniam ad doloremque tenetur incidunt nesciunt
        voluptatum ipsa enim repellendus molestiae, quisquam quo et eos sit?
        Animi, tenetur itaque. Facere? Tenetur architecto minus id esse eum?
        Culpa, quo veritatis. Quis deserunt commodi necessitatibus officiis
        dolore magni. Tenetur ab ratione libero temporibus, commodi odit
        reprehenderit quasi veniam beatae magni dolor tempore.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error quam
        natus ea ab id consectetur eveniet? A voluptate quibusdam magnam! Beatae
        fugiat, similique nisi facere consectetur inventore voluptas magnam.
        Atque! Rem porro voluptatum dolore aspernatur sapiente necessitatibus
        eius quo molestiae reiciendis, dicta laudantium accusamus aut deleniti
        nostrum quisquam excepturi saepe facere quaerat earum esse fugiat
        eveniet commodi ipsum voluptates. Rem? Repellendus, saepe ipsum eligendi
        repudiandae deleniti iusto autem delectus. Fugiat, aliquam. Animi quas,
        facilis ducimus placeat aut totam laudantium tempore enim, et sunt
        accusantium tenetur possimus velit voluptatibus voluptates! Tempore?
        Dolores, fuga nihil. Commodi velit perspiciatis error, atque dolor a,
        provident iste, nisi debitis quidem alias maiores quia vero officia
        voluptatum tenetur nam inventore! Earum blanditiis perspiciatis
        explicabo eligendi dignissimos?
      </p>
      <img src={img4} alt="basketball game" className="float-right" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        suscipit possimus asperiores facere aliquam id consequatur eligendi
        neque aperiam harum, odit aspernatur autem tenetur ad voluptatibus
        fugiat nemo aliquid qui? Repellat accusamus adipisci accusantium quia
        alias molestias commodi voluptate molestiae, fuga, sed recusandae fugit
        a consectetur nam excepturi saepe. Officia modi et suscipit delectus
        blanditiis minus architecto similique! Vel, dolorem. Perferendis
        consequuntur dolorem hic eius in voluptatum? Possimus voluptatem sunt
        sit, maiores recusandae reiciendis cum perspiciatis nam tempora corrupti
        laborum at nihil modi expedita tempore odit excepturi? Debitis, illum
        nisi. Perferendis fugit est perspiciatis earum, eligendi quas vitae,
        excepturi velit ipsam aspernatur itaque, facere at voluptatum pariatur
        illum aliquid nulla accusantium aliquam commodi vel magnam laudantium
        quasi? Eveniet, accusantium facilis! Dolorem aliquid itaque quasi libero
        impedit nemo officia odit? Repudiandae accusamus maiores voluptatem ad
        est impedit sapiente tenetur. Vero alias cum earum expedita sit est
        beatae facilis numquam mollitia sint.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ut
        quia nulla neque rerum. Harum modi, reiciendis dolores perferendis qui
        soluta iure nulla repellat officia saepe obcaecati molestias eveniet?
        Laudantium! Eaque porro debitis quae non, rem id eum quos beatae
        provident alias aliquam laboriosam, quam dignissimos aperiam delectus
        dolores quasi, quaerat voluptate quas consequuntur fugit? Sunt, cumque
        beatae? Quae, hic.
      </p>
    </div>
  );
};

export default About;
