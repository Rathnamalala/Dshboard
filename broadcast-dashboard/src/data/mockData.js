export const inputMonitorData = [
  { id: 1, name: 'Input 1', subtitle: 'Input 2', status: 'error' },
  { id: 2, name: 'No Signal', subtitle: 'Input 4', status: 'error' },
  { id: 3, name: 'No Signal', subtitle: 'Input 5', status: 'error' },
  { id: 4, name: 'Input 6', subtitle: 'Input 6', status: 'active' },
  { id: 5, name: 'Input 3', subtitle: 'Input 6', status: 'active' },
  { id: 6, name: 'Input 4', subtitle: 'Input 7', status: 'active' },
  { id: 7, name: 'Signal', subtitle: 'Input 8', status: 'active' },
  { id: 8, name: 'Input 11', subtitle: 'Input 9', status: 'active' },
  { id: 9, name: 'Input 9', subtitle: 'Input 8', status: 'active' },
  { id: 10, name: 'Input 11', subtitle: 'Input 10', status: 'active' },
  { id: 11, name: 'Input 12', subtitle: 'Input 11', status: 'active' },
  { id: 12, name: 'Input 12', subtitle: 'Input 12', status: 'active' }
];

export const activeRecordingsData = [
  {
    id: 1,
    name: 'Stullo A',
    timer: '01:02:57',
    input: 'Ingest Input 5',
    url: 'rtmp://192.168.1:50/live/studio',
    inputType: 'Input Type',
    bitrate: '3416 kb/s'
  },
  {
    id: 2,
    name: 'Studio B',
    timer: '00:45:21',
    input: 'Ingest Input 8',
    url: 'rtmp://192.168.1:52/live/studio-b',
    inputType: 'Input Type',
    bitrate: '4200 kb/s'
  },
  {
    id: 3,
    name: 'External Feed',
    timer: '02:15:33',
    input: 'Ingest Input 3',
    url: 'srt://10.0.2.15:8888/live/feed',
    inputType: 'SRT Input',
    bitrate: '5800 kb/s'
  },
  {
    id: 4,
    name: 'Remote Studio',
    timer: '00:32:18',
    input: 'Ingest Input 12',
    url: 'udp://239.0.0.1:5000',
    inputType: 'UDP Input',
    bitrate: '2800 kb/s'
  }
];

export const activeRecordingLiveData = {
  name: 'Studio A Live',
  input: 'Input 5',
  inputs: ['Input 5', 'Input 6'],
  tane: 'Tane Man.',
  inputDetails: 'Input 10 23',
  date: '1 Apr 2024',
  additionalInputs: ['Input 9', 'Input 3', 'Input 9']
};

export const ingestScheduleData = [
  {
    id: 1,
    name: 'Clip 01',
    time: 'Tomorrow 10:00',
    input: 'Input 9',
    status: 'scheduled'
  }
];

export const ingestHistoryData = [
  {
    id: 1,
    name: 'News Intro',
    date: '18 Apr 2024',
    status: 'completed'
  },
  {
    id: 2,
    name: 'Event Highlights',
    date: '17 Apr 2024',
    status: 'completed'
  },
  {
    id: 3,
    name: 'Studio A Live',
    date: '15 Apr 2024',
    status: 'completed'
  }
];

export const proxyQueueData = [
  {
    id: 1,
    name: 'Clip C',
    progress: 50,
    resolution: '1080p',
    status: 'processing'
  },
  {
    id: 2,
    name: 'Clip D',
    progress: 75,
    resolution: '720p',
    status: 'active'
  },
  {
    id: 3,
    name: 'News Segment',
    progress: 30,
    resolution: '1080p',
    status: 'error'
  }
];

export const sourceOptions = [
  'All Sources',
  'RTMP Sources',
  'SRT Sources',
  'UDP Sources',
  'File Sources'
];

export const inputTypeOptions = [
  'All Types',
  'Video Input',
  'Audio Input',
  'Mixed Input',
  'External Input'
];