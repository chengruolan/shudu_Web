import ajax from '@/lib/ajax.js';

// 举个栗子
const getSubjectList = param => {
	return ajax.get('/shudu', param);
};

export {getSubjectList};
