'use client'

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja';

export default function Hoge() {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        locale={jaLocale}
        initialEvents={[{ title: 'initial event', start: new Date() }]}
      />
    </div>
  );
}
