// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

const info = [
  {
    name: 'Dadumedicalcentre - FB',
    task: [
      { value: 'Dadumedicalcentre-fb-comment', viewValue: 'Comment' },
      { value: 'Dadumedicalcentre-fb-dm', viewValue: 'DM' },
      { value: 'Dadumedicalcentre-fb-stories', viewValue: 'Stories' },
      { value: 'Dadumedicalcentre-fb-ad-campaign', viewValue: 'Ad Campaign' },
    ],
  },
  {
    name: 'Dadumedicalcentre - IG',
    task: [
      { value: 'Dadumedicalcentre-ig-comment', viewValue: 'Comment' },
      { value: 'Dadumedicalcentre-ig-dm', viewValue: 'DM' },
      { value: 'Dadumedicalcentre-ig-stories', viewValue: 'Stories' },
      { value: 'Dadumedicalcentre-ig-ad-campaign', viewValue: 'Ad Campaign' },
    ],
  },

  {
    name: 'Dr. Nivedita Dadu - FB',
    task: [
      { value: 'drniveditadadu-fb-comment', viewValue: 'Comment' },
      { value: 'drniveditadadu-fb-dm', viewValue: 'DM' },
      { value: 'drniveditadadu-fb-stories', viewValue: 'Stories' },
      { value: 'drniveditadadu-fb-ad-campaign', viewValue: 'Ad Campaign' },
    ],
  },
  {
    name: 'Dr. Nivedita Dadu - IG',
    task: [
      { value: 'drniveditadadu-ig-comment', viewValue: 'Comment' },
      { value: 'drniveditadadu-ig-dm', viewValue: 'DM' },
      { value: 'drniveditadadu-ig-stories', viewValue: 'Stories' },
      { value: 'drniveditadadu-ig-ad-campaign', viewValue: 'Ad Campaign' },
    ],
  },
  {
    name: 'DMCtricology - FB',
    task: [
      { value: 'DMCtricology-fb-comment', viewValue: 'Comment' },
      { value: 'DMCtricology-fb-dm', viewValue: 'DM' },
      { value: 'DMCtricology-fb-stories', viewValue: 'Stories' },
      { value: 'DMCtricology-fb-ad-campaign', viewValue: 'Ad Campaign' },
    ],
  },
  {
    name: 'DMCtricology - IG',
    task: [
      { value: 'DMCtricology-ig-comment', viewValue: 'Comment' },
      { value: 'DMCtricology-ig-dm', viewValue: 'DM' },
      { value: 'DMCtricology-ig-stories', viewValue: 'Stories' },
      { value: 'DMCtricology-ig-ad-campaign', viewValue: 'Ad Campaign' },
    ],
  },
  {
    name: 'Youtube',
    task: [
      {
        value: 'Dadumedicalcentre-Youtube',
        viewValue: 'Dadumedicalcentre Youtube',
      },
      { value: 'dmctricology-Youtube', viewValue: 'dmctricology Youtube' },
    ],
  },

  {
    name: 'General',
    task: [
      {
        value: 'Word of Mouth',
        viewValue: 'Word of Mouth',
      },

      {
        value: 'Website',
        viewValue: 'Website',
      },

      {
        value: 'Walkin',
        viewValue: 'Walkin',
      },

      {
        value: 'Google Search',
        viewValue: 'Google Search',
      },

      {
        value: 'Facebook',
        viewValue: 'Facebook',
      },

      {
        value: 'Instagram',
        viewValue: 'Instagram',
      },

      {
        value: 'Friends/Family',
        viewValue: 'Friends/Family',
      },

      {
        value: 'Youtube',
        viewValue: 'Youtube',
      },

      {
        value: 'Twitter',
        viewValue: 'Twitter',
      },

      {
        value: 'Phone Call',
        viewValue: 'Phone Call',
      },

      {
        value: 'Other',
        viewValue: 'Other',
      },
    ],
  },
];









  const sourceExists = parentVal => info.some(
    user => user.task.some(childVal => childVal.value === parentVal)
  );

console.log( sourceExists('DMCtricology-ig-stories'),'info' );


appDiv.innerHTML = `<h1>JS Starter</h1>`;