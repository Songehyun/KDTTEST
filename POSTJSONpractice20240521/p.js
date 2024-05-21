const path = require('path');

path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
console.log(path.join('/foo', 'bar', '..' ,'baz/asdf', 'quux'));

//경로 표시해주는거 쉼포(,)마다 슬래시(/)로 경로 이어서 표시 (..)은 자신과 그앞의 경로까지 들어가는 것 이전 이전 폴더 보여줘