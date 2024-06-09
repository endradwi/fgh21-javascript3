const cekHariKerja = (day)=>{
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        const dataDay =['senin', 'selasa', 'rabu', 'kamis', 'jumat']
        let cek = dataDay.find((item)=>{
            return item === day
        })
        if(cek){
            resolve(cek)
        }else{
            reject(new Error('Hari ini bukan hari kerja'))
        }
      },3000)  
    })
}

cekHariKerja('senin')
    .then((hari) => {
        console.log('Adalah hari kerja')
    })
    .catch((error) => {
        console.log(error)
    })

async function checkHariKerja(day) {
    try {
        const result = await cekHariKerja(day)
        console.log('adalah hari kerja')
    } catch (error) {
        console.log('Hari ini bukan hari kerja')
    }
}
checkHariKerja('minggu')

