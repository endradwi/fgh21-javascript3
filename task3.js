// Cek Barang Terbuat dari Kayu
const barang =['Meja', 'Kursi', 'Lemari', 'Bangku', 'Pintu']
const scan = (barcode)=>{
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        let cek = barang.find((item)=>{
            return item === barcode
        })
        if(cek){
            resolve(cek)
        }else{
            reject(new Error('Bukan terbuat dari kayu'))
        }
       
      },1000)  
    })
}
scan('Meja')
    .then((hari) => {
        console.log('Terbuat dari kayu')
    })
    .catch((error) => {
        console.log('Bukan terbuat dari kayu')
    })

//Mecari nama pemain
const cekNames = (pemain)=>{
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        const names =['Adi', 'Faqih', 'Budi', 'Ahmad', 'Reza']
        let cek = names.find((item)=>{
            return item === pemain
        })
        if(cek){
            resolve(cek)
        }else{
            reject(new Error('Dia Bukan Pemain'))
        }
      },1000)  
    })
}

async function cekNam(names) {
    try {
        const result = await cekNam(names)
        console.log('Dia adalah Pemain')
    } catch (error) {
        console.log('Dia Bukan Pemain')
    }
}
cekNam('minggu')


