// 👇🏻 قم بحل السؤال الأول هنا
//## السؤال الأول - قل مرحباً 👋🏻

// 1. قم بالتوجه نحو ملف question1.js
// 2. قم بإنشاء دالة مرجعة اسمها ()sayHello
// 3. عند مناداة ()sayHello وإعطائها اسم تطبع "مرحباً، الاسم المعطى 👋🏻"
// 4. جرب مناداة الدالة دون تمرير قيمة للمعامل. يا إلهي؟ 😳
// 5. هل يمكنك تفادي هذه المشكلة؟ 🤔
/*{ <details> }
   <summary>
      تلميح
   </summary>
   <pre>
   يمكنك استخدام if statement 😉
   </pre>
</details>*/

function sayHello(name){

    // console.log(`مرحبا ${name}`);
    if (name == null)
    {
        console.log(`يا إلهي؟`);
    }else {
        console.log(`مرحبا ${name}`);
    }
}
sayHello(`lolwa`);
sayHello();

