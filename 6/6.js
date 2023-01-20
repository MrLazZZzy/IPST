event1 = ['01:15','02:00', '03:42']
event2 = ['02:00','01:15', '04:00']
let event = [...event1, ...event2]
event.sort()

for(let i = 0; i < event.length; i++){
    if(event[i] === event[i+1]){
        console.log('Ошибка, две задачи в', event[i])
    }
}

