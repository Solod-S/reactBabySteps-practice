import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
// локализация (пример в 9 строке)
export const formatEventStart = start => {
  return format(Date.parse(start), 'dd MMMM yyyy, HH:mm');
};
// start =="2022-02-17T16:30:00" приобразует в
//https://date-fns.org/v2.29.3/docs/format
export const formatEventStartRu = start => {
  return format(Date.parse(start), 'dd MMMM yyyy, HH:mm', { locale: ru });
};
// локализированая версия
