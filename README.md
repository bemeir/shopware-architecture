# Custom CMS Block Architecture for Shopware

This documentation provides an overview of the architecture for creating and managing custom CMS blocks and elements in Shopware. It outlines the rationale behind the proposed structure, highlights the benefits of this approach, and offers detailed implementation guidelines.

---

## Overview

The **Prototype Block** serves as an example of best practices for building custom CMS blocks. It demonstrates the recommended architecture for defining a custom block and element that integrates **text and image** logic within a single slot. The block also includes general options for customizing the element’s behavior and layout.

### Key Features:

1. **Dynamic Positioning**:
    - A single `position` option determines whether the image appears on the left or right side of the text.
    - Mobile-friendly collapsing with default styling based on Bootstrap utilities.
2. **Expandable Options**:
    - Additional options can be introduced, such as dynamic layouts (`50/50`, `25/75`, etc.) while maintaining simplicity to avoid overwhelming clients.
3. **Bootstrap Utility-Based Styling**:
    - Avoids unnecessary SCSS by utilizing native Bootstrap classes, following a utility-first approach inspired by Tailwind.
    - SCSS is only used when design requirements exceed Bootstrap’s capabilities.

---

## Why This Architecture is Better

### Comparison with S25 Block (Text Image Cds)

1. **Generalized Options**:
    - The `Text Image Cds` block lacks a single general option to manipulate the entire block’s behavior (e.g., positioning).
    - Our `Prototype Block` introduces a `position` option with values like `image-left` and `image-right`, dynamically altering the image’s order while maintaining mobile responsiveness.
2. **Reduced Complexity**:
    - By leveraging Bootstrap utilities, SCSS usage is minimized, simplifying maintenance and avoiding vendor lock-in.
    - Clients can easily understand and use the block without extensive technical knowledge.
3. **Future-Proof Design**:
    - The architecture allows easy expansion for additional options or layouts without major refactoring.

---

## Implementation Details

### File Structure

The block’s implementation resides in:

```
custom/static-plugins/CMSBlocks/
```

### Example Code: Prototype Block

```twig
{% block element_prototype %}
	{% set element = block.slots.getSlot('proto') %}
	{% set mediaCollection = searchMedia([element.config.media.value], context.context) %}
	{% set image = mediaCollection.get(element.config.media.value) %}

	<div class="cms-element-prototype d-flex flex-wrap {% if element.config.position.value == 'image-right' %}flex-row{% else %}flex-row-reverse{% endif %} align-items-center flex-column flex-md-row">
		{% block element_prototype_inner %}
			<!-- Text Block -->
			<div class="cms-el-prototype__text col-12 col-md-6 text-center p-4" style="max-width: 600px;">
				<div>
					{{ element.config.textAreaContent.value }}
				</div>
			</div>

			<!-- Image Block -->
			<div class="cms-el-prototype__image col-12 col-md-6 d-flex justify-content-center p-4">
				{% if image %}
					{% sw_thumbnails 'banner-media' with {
                        media: image,
                        attributes: {
                            class: 'media-desktop img-fluid rounded',
                            loading: 'lazy',
                            alt: 'banner'
                        }
                    } %}
				{% endif %}
			</div>
		{% endblock %}
	</div>
{% endblock %}
```

---

## Key Principles

1. **Bootstrap Utility-Based Styling**:

    - The block relies entirely on Bootstrap utilities (`d-flex`, `flex-row`, `align-items-center`, etc.).
    - This approach reduces the need for custom SCSS and ensures a consistent, maintainable design.

2. **Expandable Options**:

    - Current Option: `position` (values: `image-left`, `image-right`).
    - Future Options: Additional layout configurations like `50/50`, `25/75`, etc., can be introduced without major changes.

3. **Minimal SCSS Usage**:
    - SCSS is reserved for designs that cannot be achieved using Bootstrap’s native utility classes.

---

## Advantages for Clients

-   **Simplified Configuration**:
    -   Intuitive options like `position` make the block easy to use without technical knowledge.
-   **Responsive by Default**:
    -   Mobile-first design ensures blocks look great on all devices without additional configuration.
-   **Consistency Across Blocks**:
    -   Standardized architecture simplifies maintenance and reduces complexity.

---

## Next Steps

1. Implement additional layout options (`50/50`, `25/75`, etc.) as needed.
2. Test the block with various configurations to ensure responsiveness and usability.
3. Document any additional options or changes to the architecture in future updates.

---

This documentation serves as a foundational guide for implementing and managing custom CMS blocks in Shopware using a scalable and client-friendly approach.
