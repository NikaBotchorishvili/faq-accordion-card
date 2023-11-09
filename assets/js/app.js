const listItems = document.querySelectorAll(".faq-list-item");

listItems.forEach((listItem) => {
	listItem.addEventListener("click", () => {
		const arrowIcon = listItem.querySelector(".arrow-icon");
        const listDescription = listItem.querySelector(".list-description")

		if (listItem.hasAttribute("open")) {
			//  Closing scope of FAQ
			arrowIcon.style.scale = 1;
			listItem.removeAttribute("open");
            listDescription.classList.remove("show")

		} else {
			//  Opening scope of FAQ
            listItems.forEach((item) => {
				const arrIcon = item.querySelector(".arrow-icon");
                const liDesc = item.querySelector(".list-description")
				if (item.hasAttribute("open")) {
					item.removeAttribute("open");
                    liDesc.classList.remove("show")

					arrIcon.style.scale = 1;
				}
			});
            listDescription.classList.add("show")
			arrowIcon.style.scale = -1;
			listItem.setAttribute("open", "");
            listItem
		}
	});
});
