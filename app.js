(() => {
  'use strict';
  const whatsapp = '213557382892';
  const email = 'Krimoukariche89@gmail.com';
  const arabic = {
    skip:'الانتقال إلى المحتوى',brandSub:'تدريب مع عبد الكريم',menu:'القائمة',navPrograms:'البرامج',navCredentials:'الشهادات',navPlans:'الباقات',navContact:'لنناقش هدفك',
    heroEyebrow:'تدريب رياضي · الجزائر',heroTitle:'قوّة أكبر.<br><span>خطوة أبعد.</span><br>معك في المسار.',heroIntro:'هدفك يستحق خطة واضحة. تدريب يناسبك، توجيهات غذائية وعبد الكريم إلى جانبك لتتقدّم.',heroCta:'نبني برنامجي',heroPlans:'اكتشف الباقات',heroProof:'تكوين في كمال الأجسام واللياقة البدنية',heroProofSub:'شهادتان. ومرافقة تناسبك.',yourCoach:'مدربك',portraitSub:'كمال الأجسام · اللياقة البدنية · المرافقة',portraitTag:'إيقاعك.<br>تقدّمك.',heroBottom:'الخطوة الأولى تبدأ منك.',tagTraining:'التدريب',tagNutrition:'التغذية',tagFollow:'المتابعة',
    programsEyebrow:'نقطة البداية، أنت.',programsTitle:'هدف واحد.<br><span>مسار يناسبك.</span>',programsIntro:'مستواك ووقتك والمعدات المتاحة لك تحدّد طريقة بناء برنامجك.',goalMuscle:'زيادة العضلات',goalWeight:'خسارة الوزن',goalFitness:'تحسين اللياقة',goalAdvice:'نحدّده معًا',goalPanelLabel:'البرنامج يتكيّف معك',goalCta:'هذا هو هدفي',method1:'تدريب بخطة واضحة',method1Desc:'تمارين وإيقاع وتدرّج نبنيها حول هدفك.',method2:'توجيهات غذائية',method2Desc:'مرافقة لتنظيم عاداتك الغذائية في حياتك اليومية.',method3:'تواصل مع المدرب',method3Desc:'أسئلتك وملاحظاتك تساعدنا على تعديل الخطوات القادمة.',
    credentialsEyebrow:'التكوين وراء المنهج.',credentialsTitle:'مدرب واحد.<br><span>أساس واضح.</span>',credentialsIntro:'تابع عبد الكريم كريش تكوينين للمدربين، في كمال الأجسام واللياقة البدنية، لدى International Coaching & Development Group في تلمسان.',twoCourses:'تكوينان',zoom:'تكبير',musculation:'كمال الأجسام',fitness:'اللياقة البدنية',
    plansEyebrow:'التزامك. انطلاقتك.',plansTitle:'اختر المدة.<br><span>وحافظ على المسار.</span>',plansIntro:'كل باقة تجمع التدريب، المرافقة الغذائية والمتابعة مع مدربك.',plan1Label:'لتبدأ',plan2Label:'لتجد إيقاعك',plan3Label:'لتبني الاستمرارية',plan1Title:'الانطلاقة',plan2Title:'التقدّم',plan3Title:'الاستمرارية',plan1Duration:'شهر واحد من التدريب',plan2Duration:'شهران من التدريب',plan3Duration:'ثلاثة أشهر من التدريب',currency:'دج',
    plan1Monthly:'<bdi dir="ltr">25 000</bdi> دج / شهر',plan2Monthly:'<bdi dir="ltr">22 500</bdi> دج / شهر · توفير <bdi dir="ltr">5 000</bdi> دج*',plan3Monthly:'<bdi dir="ltr">20 000</bdi> دج / شهر · توفير <bdi dir="ltr">15 000</bdi> دج*',
    featureTraining:'برنامج تدريب يناسب مستواك',featureFood:'مرافقة غذائية',featureSupplements:'مناقشة المكمّلات عند الحاجة',featureFollow:'متابعة وتعديلات مع المدرب',choose1:'اختر شهرًا واحدًا',choose2:'اختر شهرين',choose3:'اختر ثلاثة أشهر',savingsNote:'* مقارنة باشتراكات شهر واحد منفصلة لنفس المدة.',paymentNote:'لا دفع عند تقديم الطلب. يتم توضيح محتوى المتابعة والاتفاق على طريقة الدفع مع المدرب قبل البداية.',
    coachEyebrow:'شخص إلى جانبك.',coachTitle:'المنهج مهم.<br><span>والعلاقة أيضًا.</span>',coachIntro:'الخطة تصبح مفيدة عندما تناسب حياتك. تواصل مباشرة مع عبد الكريم لمناقشة مستواك، فهم البرنامج وتوضيح توقعاتك.',coachPoint1:'نبدأ بحديث',coachPoint1Desc:'هدفك وإيقاعك والوقت المتاح لك.',coachPoint2:'نتفق على الشروط معًا',coachPoint2Desc:'نوضّح محتوى البرنامج، المتابعة والدفع قبل التسجيل.',coachCta:'تحدّث مع عبد الكريم',
    faqEyebrow:'قبل الخطوة الأولى',faqTitle:'أسئلتك.<br><span>بكل بساطة.</span>',faq1:'هل يناسبني إذا كنت مبتدئًا؟',faq1Answer:'يمكنك التواصل مهما كان مستواك. الحديث الأول يساعد على تحديد نقطة البداية وبرنامج يناسبك.',faq2:'التدريب في القاعة أم في المنزل؟',faq2Answer:'اذكر مكان تدريبك والمعدات المتاحة لك. يوضّح لك المدرب الخيارات الممكنة حسب هدفك.',faq3:'كيف يتم التسجيل والدفع؟',faq3Answer:'جهّز طلبك وأرسله عبر واتساب أو البريد الإلكتروني. تتفق بعدها مع المدرب على البرنامج وطريقة الدفع. الموقع لا يخصم أي مبلغ.',faq4:'هل النتائج مضمونة؟',faq4Answer:'التقدّم يعتمد على انتظامك، وضعك عند البداية وعاداتك. المرافقة توفّر خطة واضحة دون ضمان نتائج بأرقام محددة.',
    contactEyebrow:'هنا تبدأ الخطوة.',contactTitle:'قرارك القادم.<br><span>خطوتك للأمام.</span>',contactIntro:'بعض المعلومات وحديث أول. لنجهّز طلبك لعبد الكريم.',emailLabel:'البريد الإلكتروني',contactNote:'تراجع رسالتك قبل إرسالها. الطلب لا يلزمك بأي دفع.',formTitle:'لنأخذ الخطوة الأولى.',formRequired:'* خانات إلزامية',nameLabel:'اسمك *',phoneLabel:'رقم واتساب *',formEmailLabel:'بريدك الإلكتروني (اختياري)',formGoalLabel:'هدفك *',formPlanLabel:'الباقة *',
    option1:'شهر واحد · \u206625 000\u2069 دج',option2:'شهران · \u206645 000\u2069 دج',option3:'ثلاثة أشهر · \u206660 000\u2069 دج',optionAdvice:'أريد المساعدة في الاختيار',levelLabel:'مستواك',beginner:'مبتدئ',intermediate:'متوسط',advanced:'متقدّم',placeLabel:'مكان التدريب',gym:'في القاعة',home:'في المنزل',both:'كلاهما / نحدّده معًا',messageLabel:'كلمة عن هدفك (اختياري)',consent:'أوافق على إرسال هذه المعلومات إلى المدرب للتواصل معي بشأن طلبي.',prepare:'جهّز طلبي',formFooter:'نجهّز رسالتك ثم تختار وسيلة إرسالها.',privacy:'الخصوصية',footerText:'قوّتك. إيقاعك. خطوتك القادمة.',footerContact:'تواصل معنا',footerLocation:'تدريب رياضي · الجزائر',mobileLabel:'باقتك',mobileCta:'ابدأ الآن',requestTitle:'طلبك جاهز.',requestIntro:'راجع رسالتك ثم افتح واتساب أو تطبيق البريد الإلكتروني لإرسالها للمدرب.',sendWhatsApp:'افتح واتساب',sendEmail:'افتح البريد',copy:'انسخ الرسالة',requestNote:'لإكمال الإرسال، اضغط على «إرسال» في التطبيق الذي اخترته.',originalPdf:'عرض الوثيقة الأصلية (PDF)',privacyText:'المعلومات التي تدخلها تُستخدم لتجهيز رسالتك. لا يحفظها الموقع ولا يرسلها تلقائيًا. تختار أنت إرسالها للمدرب عبر واتساب أو تطبيق البريد الإلكتروني. للاستفسار حول طلبك، تواصل مع عبد الكريم عبر Krimoukariche89@gmail.com.'
  };
  const elements = [...document.querySelectorAll('[data-i18n]')];
  const french = Object.fromEntries(elements.map(el => [el.dataset.i18n, el.innerHTML]));
  const goals = {
    muscle:{fr:['Bâtir votre force.<br>Affiner votre méthode.','Des séances structurées et une progression adaptée à votre niveau, pour travailler votre développement musculaire avec régularité.'],ar:['ابنِ قوّتك.<br>طوّر منهجك.','حصص منظمة وتدرّج يناسب مستواك لتطوير عضلاتك مع الاستمرارية.']},
    weight:{fr:['Changer vos habitudes.<br>Avancer à votre rythme.','Un entraînement cohérent et des repères alimentaires pour accompagner votre objectif de perte de poids dans votre quotidien.'],ar:['غيّر عاداتك.<br>تقدّم بإيقاعك.','تدريب منظم وتوجيهات غذائية لمرافقة هدفك في خسارة الوزن بما يناسب حياتك اليومية.']},
    fitness:{fr:['Retrouver votre élan.<br>Faire place au mouvement.','Un programme progressif pour reprendre l’entraînement, développer votre condition physique et installer une routine qui vous convient.'],ar:['استعد نشاطك.<br>اجعل الحركة عادة.','برنامج تدريجي للعودة إلى التدريب، تطوير لياقتك وبناء روتين يناسبك.']}
  };
  let language = 'fr';
  let currentGoal = 'muscle';
  let certificateType = 'musculation';
  let preparedMessage = '';
  const form = document.getElementById('enquiry-form');
  const planSelect = document.getElementById('form-plan');
  const goalSelect = document.getElementById('form-goal');
  const requestDialog = document.getElementById('request-dialog');
  const menu = document.getElementById('navigation');
  const menuToggle = document.querySelector('.menu-toggle');
  const text = key => (language === 'ar' ? arabic : french)[key] || french[key];
  const optionText = field => field.selectedOptions[0].textContent;
  function closeMenu() {
    menu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
  function setGoal(goal, syncForm = true) {
    if (!Object.hasOwn(goals, goal)) throw new Error('Unknown coaching goal');
    currentGoal = goal;
    document.querySelectorAll('[data-goal]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.goal === goal)));
    document.getElementById('goal-title').innerHTML = goals[goal][language][0];
    document.getElementById('goal-description').textContent = goals[goal][language][1];
    if (syncForm) goalSelect.value = goal;
  }
  function updateMobilePlan() {
    document.getElementById('mobile-plan').textContent = optionText(planSelect);
  }
  function selectPlan(months, navigate = true) {
    if (![1,2,3].includes(months)) throw new Error('Choose 1, 2 or 3 months');
    planSelect.value = String(months);
    updateMobilePlan();
    if (navigate) document.getElementById('contact').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
    return {months, totalDZD:{1:25000,2:45000,3:60000}[months], status:'selected', requestSent:false};
  }
  function updateCertificateLabels() {
    document.querySelectorAll('[data-certificate]').forEach(button => {
      const type = button.dataset.certificate;
      const label = language === 'ar' ? `شهادة تكوين المدربين — ${arabic[type]}` : `Certificat de formation de formateurs — ${french[type]}`;
      button.setAttribute('aria-label', language === 'ar' ? `تكبير ${label}` : `Agrandir le ${label.toLowerCase()}`);
      button.querySelector('img').alt = `${label} — Abdelkrim Kariche`;
    });
    document.getElementById('certificate-dialog-title').textContent = text(certificateType);
    document.getElementById('certificate-full').alt = `${text(certificateType)} — Abdelkrim Kariche`;
  }
  function setLanguage(next) {
    language = next === 'ar' ? 'ar' : 'fr';
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    elements.forEach(el => {
      const value = text(el.dataset.i18n);
      if (el.tagName === 'OPTION') el.textContent = value;
      else el.innerHTML = value;
    });
    document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
    document.querySelector('.languages').setAttribute('aria-label', language === 'ar' ? 'اللغة' : 'Langue');
    menu.setAttribute('aria-label',language === 'ar' ? 'القائمة الرئيسية' : 'Navigation principale');
    document.querySelector('.goal-tabs').setAttribute('aria-label',language === 'ar' ? 'اختر هدفك' : 'Choisir votre objectif');
    document.querySelector('.header .brand').setAttribute('aria-label',language === 'ar' ? 'كريمو كوتشينغ، الرئيسية' : 'Krimou Coaching, accueil');
    document.querySelectorAll('.close-dialog').forEach(button => button.setAttribute('aria-label',language === 'ar' ? 'إغلاق' : 'Fermer'));
    document.querySelectorAll('.portrait img,.coach-photo img').forEach(img => img.alt = language === 'ar' ? 'عبد الكريم كريش، مدرب رياضي، في القاعة الرياضية' : 'Abdelkrim Kariche, coach sportif, dans une salle de sport');
    form.elements.name.placeholder = language === 'ar' ? 'اسمك الكامل' : 'Votre nom';
    form.elements.email.placeholder = language === 'ar' ? 'you@example.com' : 'vous@exemple.com';
    form.elements.message.placeholder = language === 'ar' ? 'الوقت المتاح لك وتوقعاتك…' : 'Vos disponibilités, vos attentes…';
    document.getElementById('request-preview').setAttribute('aria-label',language === 'ar' ? 'الرسالة المجهّزة' : 'Message préparé');
    document.title = language === 'ar' ? 'كريمو كوتشينغ — تدريب رياضي مع عبد الكريم' : 'Krimou Coaching — Coaching sportif avec Abdelkrim';
    document.querySelector('meta[name=description]').content = language === 'ar' ? 'تدريب مع عبد الكريم كريش. كمال الأجسام، اللياقة البدنية والمرافقة في الجزائر. اكتشف شهاداته وجهّز طلبك.' : 'Votre coaching avec Abdelkrim Kariche. Musculation, fitness et accompagnement personnalisé en Algérie. Découvrez ses formations et préparez votre demande.';
    setGoal(currentGoal, false);
    updateMobilePlan();
    updateCertificateLabels();
    if (requestDialog.open) prepareMessage();
    document.getElementById('form-error').hidden = true;
    document.getElementById('copy-status').textContent = '';
    try { localStorage.setItem('kariche-language', language); } catch {}
  }
  function prepareMessage() {
    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();
    const enteredEmail = form.elements.email.value.trim();
    const note = form.elements.message.value.trim();
    const plan = optionText(planSelect);
    const goal = optionText(goalSelect);
    const level = optionText(form.elements.level);
    const place = optionText(form.elements.place);
    const isolate = value => language === 'ar' ? `\u2066${value}\u2069` : value;
    preparedMessage = language === 'ar'
      ? `مرحبًا عبد الكريم، أريد معرفة المزيد عن التدريب معك.\n\nالاسم: ${name}\nواتساب: ${isolate(phone)}${enteredEmail ? `\nالبريد: ${isolate(enteredEmail)}` : ''}\nالهدف: ${goal}\nالباقة: ${plan}\nالمستوى: ${level}\nمكان التدريب: ${place}${note ? `\n\nملاحظتي: ${note}` : ''}\n\nأرغب في مناقشة البرنامج، المتابعة وطريقة الدفع قبل البداية.`
      : `Bonjour Abdelkrim, je souhaite en savoir plus sur votre coaching.\n\nNom : ${name}\nWhatsApp : ${phone}${enteredEmail ? `\nEmail : ${enteredEmail}` : ''}\nObjectif : ${goal}\nFormule : ${plan}\nNiveau : ${level}\nLieu d’entraînement : ${place}${note ? `\n\nMon projet : ${note}` : ''}\n\nJe souhaite discuter du programme, du suivi et des modalités de paiement avant de commencer.`;
    const preview = document.getElementById('request-preview');
    preview.value = preparedMessage;
    preview.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('send-whatsapp').href = `https://wa.me/${whatsapp}?text=${encodeURIComponent(preparedMessage)}`;
    const subject = language === 'ar' ? 'طلب تدريب مع عبد الكريم كريش' : 'Demande de coaching — Abdelkrim Kariche';
    document.getElementById('send-email').href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(preparedMessage)}`;
    document.getElementById('copy-status').textContent = '';
  }
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click',() => setLanguage(button.dataset.lang)));
  document.querySelectorAll('[data-goal]').forEach(button => button.addEventListener('click',() => setGoal(button.dataset.goal)));
  document.querySelectorAll('[data-plan]').forEach(button => button.addEventListener('click',() => selectPlan(Number(button.dataset.plan))));
  document.getElementById('choose-goal').addEventListener('click',() => {
    goalSelect.value = currentGoal;
    document.getElementById('contact').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  });
  goalSelect.addEventListener('change',() => { if (Object.hasOwn(goals,goalSelect.value)) setGoal(goalSelect.value,false); });
  planSelect.addEventListener('change',updateMobilePlan);
  menuToggle.addEventListener('click',() => {
    const expanded = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded',String(expanded));
    menu.classList.toggle('open',expanded);
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event => { if (event.key === 'Escape' && menu.classList.contains('open')) {closeMenu();menuToggle.focus();} });
  form.addEventListener('submit',event => {
    event.preventDefault();
    const phoneDigits = form.elements.phone.value.replace(/\D/g,'');
    const error = document.getElementById('form-error');
    if (!form.elements.name.value.trim() || !/^[+\d\s().-]+$/.test(form.elements.phone.value) || phoneDigits.length < 8 || phoneDigits.length > 15) {
      error.textContent = language === 'ar' ? 'اكتب اسمك ورقم واتساب صحيحًا قبل تجهيز الطلب.' : 'Indiquez votre nom et un numéro WhatsApp valide avant de préparer la demande.';
      error.hidden = false;
      (!form.elements.name.value.trim() ? form.elements.name : form.elements.phone).focus();
      return;
    }
    error.hidden = true;
    prepareMessage();
    requestDialog.showModal();
  });
  document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click',() => document.getElementById(button.dataset.close).close()));
  document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('click',event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  }));
  document.querySelectorAll('[data-certificate]').forEach(button => button.addEventListener('click',() => {
    certificateType = button.dataset.certificate;
    const full = document.getElementById('certificate-full');
    full.src = `certificat-${certificateType}.jpg`;
    document.getElementById('certificate-pdf').href = `certificat-${certificateType}.pdf`;
    updateCertificateLabels();
    document.getElementById('certificate-dialog').showModal();
  }));
  document.getElementById('privacy-button').addEventListener('click',() => document.getElementById('privacy-dialog').showModal());
  document.getElementById('copy-request').addEventListener('click',async () => {
    const status = document.getElementById('copy-status');
    try {
      await navigator.clipboard.writeText(preparedMessage);
      status.textContent = language === 'ar' ? 'تم نسخ الرسالة.' : 'Message copié.';
    } catch {
      const preview = document.getElementById('request-preview');
      preview.focus();
      preview.select();
      status.textContent = language === 'ar' ? 'النسخ التلقائي غير متاح. حدّد الرسالة وانسخها من الخانة.' : 'Copie automatique indisponible. Sélectionnez et copiez le message depuis le champ.';
    }
  });
  document.getElementById('year').textContent = String(new Date().getFullYear());
  let savedLanguage = 'fr';
  try { savedLanguage = localStorage.getItem('kariche-language') || 'fr'; } catch {}
  setLanguage(savedLanguage);
  if (document.modelContext?.registerTool) {
    const lifecycle = new AbortController();
    const register = tool => {
      try { Promise.resolve(document.modelContext.registerTool(tool,{signal:lifecycle.signal})).catch(() => {}); } catch {}
    };
    register({name:'get_coaching_plans',title:'Get coaching plans',description:'Read the displayed coaching durations and total prices in Algerian dinars.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute:() => ({coach:'Abdelkrim Kariche',plans:[{months:1,totalDZD:25000},{months:2,totalDZD:45000},{months:3,totalDZD:60000}],selectedPlan:planSelect.value,paymentProcessed:false})});
    register({name:'select_coaching_plan',title:'Select coaching plan',description:'Select a coaching duration in the visible enquiry form. This stages a request and never sends a message or takes payment.',inputSchema:{type:'object',properties:{months:{type:'integer',enum:[1,2,3]}},required:['months'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute:input => {if (!input || typeof input !== 'object') throw new Error('Expected a coaching duration');return selectPlan(input.months);}});
    window.addEventListener('pagehide',() => lifecycle.abort(),{once:true});
  }
})();
