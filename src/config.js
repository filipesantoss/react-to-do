const dev = {
    baseURL: 'http://localhost:8080/'
};

const prod = {
    baseURL: './'
};

export default (() => (process.env.NODE_ENV === 'development' ? dev : prod))();
