function myFunction(x) {
    x.classList.toggle("change");
  }

const translation = {
  en: {
    Home:  "Home",
    Our_projects: "Our Projects",
    Type_of_floor: "Type of floor That we install",
    About_us: "About us",
    Contact_us: "Contact us",
    title: "About us",
    p:  `About kayan Flooring and Decoration\nkayan is one of the leading companies in the field of flooring design and installation,\noffering innovative and stylish solutions for commercial projects.\nThe company was established with the goal of transforming spaces into vibrant, functional environments by providing a wide range of high-quality flooring options,\nincluding vinyl flooring, along with professional installation services that ensure complete customer satisfaction.\nThe company strives to offer integrated solutions that suit all tastes and budgets, with a focus on the fine details that distinguish each project.\nThanks to a specialized team and modern machinery, kayan guarantees the execution of projects on time and to the highest standards of quality.\nAbout the Owner - Hytham omara is the founder and CEO of kayan, with an extensive background in interior design and decoration.\nHytham omara began his professional career 18 years ago and has always sought to offer innovative services\nthat reflect clients' tastes and meet their needs.\nWith his creative vision and commitment to quality,\nhe has successfully built a strong reputation for his company in both local and international markets.\nHytham omara has vast experience in interior consulting and design,\nhaving contributed to many prestigious projects,\nincluding the design and installation of flooring decorations for major national projects.\nHe believes in the importance of innovation and utilizing modern technology to achieve the highest standards of quality in all projects.\nUnder Hytham omara's wise leadership and commitment to excellence,\nkayan has become one of the leading names in the industry,\nearning the trust of clients across various sectors.About the Owner - Hytham omara is the founder and CEO of kayan,\nwith an extensive background in interior design and decoration.\nHytham omara began his professional career 18 years ago and has always sought to offer innovative services that reflect clients' tastes and meet their needs.\nWith his creative vision and commitment to quality,\nhe has successfully built a strong reputation for his company in both local and international markets.\nHytham omara has vast experience in interior consulting and design,\nhaving contributed to many prestigious projects,\nincluding the design and installation of flooring decorations for major national projects.\nHe believes in the importance of innovation and utilizing modern technology to achieve the highest standards of quality in all projects. \n`
  },
  ar: {
    Home:  " الصفحة الرئيسية",
    Our_projects: "مشاريعنا",
    Type_of_floor: "نوع الأرضيات التي نقوم بتركيبها",
    About_us: "معلومات عنا",
    Contact_us: "اتصل بنا",
    title: "معلومات عنا",
    p: `حول شركة كيان للأرضيات والديكور\nكيان من الشركات الرائدة في مجال تصميم وتركيب الأرضيات،\nحيث تقدم حلولاً مبتكرة وأنيقة للمشاريع التجارية.\nتأسست الشركة بهدف تحويل المساحات إلى\nبيئات نابضة بالحياة وعملية من خلال توفير مجموعة واسعة من خيارات الأرضيات عالية الجودة،\nبما في ذلك أرضيات الفينيل،\nإلى جانب خدمات تركيب احترافية تضمن رضا العملاء التام.\nتسعى الشركة جاهدةً لتقديم حلول متكاملة تناسب جميع الأذواق والميزانيات،\nمع التركيز على أدق التفاصيل التي تميز كل مشروع.\nبفضل فريق عمل متخصص وآلات حديثة،\nتضمن كيان تنفيذ المشاريع في الوقت المحدد وبأعلى معايير الجودة.\nنبذة عن المالك - هيثم عمارة هو المؤسس والرئيس التنفيذي لشركة كيان،\nبخبرة واسعة في مجال التصميم الداخلي والديكور.\nبدأ هيثم عمارة مسيرته المهنية قبل 18 عامًا، وسعى دائمًا لتقديم خدمات مبتكرة تعكس أذواق العملاء وتلبي احتياجاتهم.\nبفضل رؤيته الإبداعية والتزامه بالجودة،\nنجح في بناء سمعة قوية لشركته في السوقين المحلية والدولية.\nيتمتع هيثم عمارة بخبرة واسعة في مجال الاستشارات والتصميم الداخلي،\nحيث ساهم في العديد من المشاريع المرموقة،\nبما في ذلك تصميم وتركيب ديكورات الأرضيات لمشاريع وطنية كبرى.\nيؤمن بأهمية الابتكار واستخدام التكنولوجيا الحديثة لتحقيق أعلى معايير الجودة في جميع المشاريع.\nتحت قيادة هيثم عمارة الحكيمة والتزامه بالتميز،\nأصبحت كيان واحدة من الأسماء الرائدة في هذه الصناعة،\nوكسبت ثقة العملاء في مختلف القطاعات.\n`
  }
};
const languageselectop = document.querySelector("select");

let Home = document.getElementById("home");
let Our_projects = document.getElementById("our_projects");
let Type_of_floor = document.getElementById("type_of_floor");
let Contact_us = document.getElementById("contact_us");
let About_us = document.getElementById("about_us");
let p = document.getElementById("p");
let title = document.querySelector(".title");
languageselectop.addEventListener("change",(event) => {setlanguage(event.target.value)})
const setlanguage = (language) => {
if(language == "ar"){

    Home.innerText = translation.ar.Home;
    Our_projects.innerText = translation.ar.Our_projects;
    Type_of_floor.innerText = translation.ar.Type_of_floor;
    Contact_us.innerText = translation.ar.Contact_us;
    About_us.innerText = translation.ar.About_us;
    p.innerText = translation.ar.p;
    title.innerText = translation.ar.title;

      }else if(language == "en"){
    Home.innerText = translation.en.Home;
    Our_projects.innerText = translation.en.Our_projects;
    Type_of_floor.innerText = translation.en.Type_of_floor;
    Contact_us.innerText = translation.en.Contact_us;
    About_us.innerText = translation.en.About_us;
    p.innerText = translation.en.p;
    title.innerText = translation.en.title;
}}