$(function() {
    $.ajax({
        url:'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-B1220D3D-2379-44FB-9FED-93F934480F69&format=JSON&locationName=%E5%85%A7%E6%B9%96%E5%8D%80&elementName=T',
        type: "GET",
        dataType: "json",
        success: function(res) {
            console.log(res);
            console.log(res.records.locations[0].location[0].locationName);
            const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            const html1 = `<div class="d-flex flex-column block"><small class="text-muted mb-0">`;
            const html2 = `</small><div class="text-center"><img class="symbol-img" src="`;
            const html3 = `"></div><h6><strong>`;
            const html4 = `&#176;</strong></h6></div>`;
            $('#city_name').html(res.records.locations[0].locationsName);
            $('#district').html(res.records.locations[0].location[0].locationName);
            $('#tempture').html(res.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value + "&#176");

            let j = 0;
            for(let i =0;i<10;i++) {
                let degree = res.records.locations[0].location[0].weatherElement[0].time[i].elementValue[0].value;
                console.log($('.block').eq(i).find('small').html());
                console.log($('.block').eq(i).find('h6').html());
                icon = (degree > 18) ? "https://i.imgur.com/Shrg84B.png" : "https://i.imgur.com/BeWfUuG.png";
                if((i%2) == 0){
                    let t = res.records.locations[0].location[0].weatherElement[0].time[i].elementValue[0].value;
                    let wd = res.records.locations[0].location[0].weatherElement[0].time[i].startTime;
                    let tempture=`<strong>${t}&#176;</strong>`;
                    console.log(tempture);
                    $('.block').eq(j).find('h6').html(tempture);

                    const d = new Date(wd);
                    let day_i = d.getDay();
                    $('.block').eq(j).find('small').html(week[day_i])
                    j++;
                }
            }   
        },
        error:function(error) {
            console.log(error);
        }
    })
})
// fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-B1220D3D-2379-44FB-9FED-93F934480F69&format=JSON&locationName=%E5%85%A7%E6%B9%96%E5%8D%80&elementName=T')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         console.log(data.records.locations[0].location[0].locationName);
        
//     })
//     .catch(error => {
//         console.log(error);
//     });
