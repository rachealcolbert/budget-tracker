let db;

const request = indexedDB.open('budget-tracker', 1);
request.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStore('transaction', {
        autoIncrement: true
    });
};

request.onsuccess = function (event) {
    db = event.target.result;
    if (navigator.online) {}
};

request.onerror = function (event) {
    console.log(event.target.errorCode);
};

function saveRecord(record) {
    const transaction = db.transaction(['transaction'], 'readwrite');
    const transactionObjectStore = transaction.objectStore('transaction');
    transactionObjectStore.add(record);
}