import { formatDistanceStrict } from 'date-fns';
//https://date-fns.org/v2.29.3/docs/formatDistanceStrict
import { ru } from 'date-fns/locale';
// локализация (пример в 9 строке)
export const formatEventDuration = (start, end) => {
  return formatDistanceStrict(Date.parse(start), Date.parse(end));
};
// считает разницу
export const formatEventDurationRu = (start, end) => {
  return formatDistanceStrict(Date.parse(start), Date.parse(end), { locale: ru });
};
// локализированая версия
