let arrayOfNeeds = [
    { date: "01-02-2022", name : " asdg", price :" 123"
    },
    { date: "01-03-2023", name : " asdg", price :" 1212343"
    },
    { date: "01-01-2022", name : " asdg", price :" 12123412343"
    }
    ]
    
    const handleMonthFilter = () => {
    let selectedMonthIndex = "1";
    const splitArrayOfNeeds = arrayOfNeeds.filter((ele) => {
    let date = ele.date.split("-")[1]; //[01, 02, 2020]
    console.log(date);
    while(date.charAt(0) === '0')
    date = date.substring(1);
    return date === selectedMonthIndex;
    });
    console.log(splitArrayOfNeeds);
    };
    
    handleMonthFilter();