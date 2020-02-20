$(document).ready(function() {
	const circle = $('.progress_circle')[0];
	const numbers = $('.numbers');
	const numValues = numbers.data();
	const radius = circle.r.baseVal.value;
	const circumference = 2 * Math.PI * radius;
	circle.style.strokeDashoffset = circumference;

	$('input').change(function() {
		const el = $(this)[0];
		const value = Number(el.value);

		if (value < 1000 && (
				(el.id === 'num' && value <= Number(numValues.numOf) && value >= 0) ||
				(el.id === 'numOf' && value >= Number(numValues.num))
		)) {
			numbers.data(el.id, value);
			numbers.text(`${numValues.num} of ${numValues.numOf}`);
			setProgress(circle, circumference, numValues.num / numValues.numOf * 100)
		}
	});

	setTimeout(function() {
		setProgress(circle, circumference, numValues.num / numValues.numOf * 100)
	}, 1000)
});

function setProgress(el, circumference, percent) {
	el.style.opacity = 1;
	el.style.strokeDasharray = `${circumference} ${circumference}`;
	el.style.strokeDashoffset = circumference - percent / 100 * circumference;
}