import re
from datetime import date


# =========================================================
# 1. REGULAR EXPRESSIONS
# =========================================================

STUDENT_ID = re.compile(r"^\d{9}$")

FULLNAME = re.compile(r"^[A-Za-z][A-Za-z .'-]{1,79}$")

EMAIL = re.compile(
    r"^[A-Za-z0-9._%+-]+@(?:net\.)?usek\.edu\.lb$",
    re.IGNORECASE
)

PHONE = re.compile(r"^\+961\s?\d{2}\s?\d{3}\s?\d{3}$")

GITHUB = re.compile(
    r"^https://github\.com/[A-Za-z0-9-]+/?$",
    re.IGNORECASE
)

HTTPS_URL = re.compile(r"^https://\S+$", re.IGNORECASE)

MONTH = re.compile(r"^\d{4}-(0[1-9]|1[0-2])$")

TIME = re.compile(r"^(?:[01]\d|2[0-3]):[0-5]\d$")

HEXCOLOR = re.compile(r"^#[0-9A-Fa-f]{6}$")


# =========================================================
# 2. ALLOWED VALUES
# =========================================================

MAJORS = {
    "computer",
    "electrical",
    "biomedical",
    "telecommunications",
}

MAJOR_LABELS = {
    "computer": "Computer Engineering",
    "electrical": "Electrical Engineering",
    "biomedical": "Biomedical Engineering",
    "telecommunications": "Telecommunications Engineering",
}

GRADUATION = {
    "spring",
    "summer",
    "fall",
}

YESNO = {
    "yes",
    "no",
}

SKILLS = {
    "Programming",
    "Embedded Systems",
    "Electronics",
    "Computer Networks",
    "Telecommunications",
    "Biomedical Instrumentation",
    "Artificial Intelligence / Machine Learning",
    "Signal Processing",
}

SOFTWARE = {
    "MATLAB",
    "Multisim",
    "AutoCAD",
    "SolidWorks",
    "LabVIEW",
    "Cisco Packet Tracer",
}

PROJECT_AREAS = {
    "software engineering",
    "cybersecurity",
    "embedded systems",
    "power systems",
    "renewable energy",
    "control systems",
    "medical devices",
    "biomedical imaging",
    "health informatics",
    "wireless networks",
    "5g/6g",
    "network security",
}

REQUIRED = {
    "student_id",
    "fullname",
    "email",
    "major",
    "graduation",
}


# =========================================================
# 3. HELPER FUNCTIONS
# =========================================================

def parse_date(value):
    """Convert an ISO date string into a date object."""
    try:
        return date.fromisoformat(value)
    except (ValueError, TypeError):
        return None


def to_number(value):
    """Convert a string to a floating-point number."""
    try:
        return float(value)
    except (ValueError, TypeError):
        return None


def to_int(value):
    """Convert a string to an integer."""
    try:
        return int(value)
    except (ValueError, TypeError):
        return None


# =========================================================
# 4. MAIN VALIDATION FUNCTION
# =========================================================

def validate_profile(form):
    """
    Validate the submitted profile form.

    Returns:
        errors: Dictionary containing validation error messages.
        cleaned: Dictionary containing validated/normalized values.
    """

    errors = {}
    cleaned = {}

    # -----------------------------------------------------
    # Required fields
    # -----------------------------------------------------

    for field in REQUIRED:
        if form.get(field, "").strip() == "":
            errors[field] = "This field is required."

    # -----------------------------------------------------
    # Student ID
    # -----------------------------------------------------

    student_id = form.get("student_id", "").strip()

    if student_id and not STUDENT_ID.fullmatch(student_id):
        errors["student_id"] = (
            "Student ID must contain exactly 9 digits."
        )

    cleaned["student_id"] = student_id

    # -----------------------------------------------------
    # Full name
    # -----------------------------------------------------

    fullname = form.get("fullname", "").strip()

    if fullname and not FULLNAME.fullmatch(fullname):
        errors["fullname"] = (
            "Use letters, spaces, hyphens or apostrophes "
            "(2-80 characters)."
        )

    cleaned["fullname"] = fullname

    # -----------------------------------------------------
    # USEK email
    # -----------------------------------------------------

    email = form.get("email", "").strip()

    if email and not EMAIL.fullmatch(email):
        errors["email"] = (
            "Use a valid USEK email address, such as "
            "student@net.usek.edu.lb."
        )

    cleaned["email"] = email.lower()

    # -----------------------------------------------------
    # Phone number
    # -----------------------------------------------------

    phone = form.get("phone", "").strip()

    if phone and not PHONE.fullmatch(phone):
        errors["phone"] = (
            "Use +961 followed by 8 digits, for example "
            "+961 70 123456."
        )

    cleaned["phone"] = phone

    # -----------------------------------------------------
    # Birthdate and age
    # -----------------------------------------------------

    birthdate = form.get("birthdate", "").strip()

    if birthdate:
        birth_day = parse_date(birthdate)

        if birth_day is None:
            errors["birthdate"] = "Enter a valid birthdate."

        elif birth_day > date.today():
            errors["birthdate"] = (
                "Date of birth cannot be in the future."
            )

        else:
            today = date.today()

            age = today.year - birth_day.year

            if (today.month, today.day) < (
                birth_day.month,
                birth_day.day
            ):
                age -= 1

            if age < 15 or age > 100:
                errors["birthdate"] = (
                    "Age must be between 15 and 100 years."
                )

    cleaned["birthdate"] = birthdate

    # -----------------------------------------------------
    # GitHub portfolio
    # -----------------------------------------------------

    portfolio = form.get("portfolio", "").strip()

    if portfolio and not GITHUB.fullmatch(portfolio):
        errors["portfolio"] = (
            "Enter a GitHub URL, such as "
            "https://github.com/username."
        )

    cleaned["portfolio"] = portfolio

    # -----------------------------------------------------
    # GIN446 website
    # -----------------------------------------------------

    gin446 = form.get("gin446", "").strip()

    if gin446 and not HTTPS_URL.fullmatch(gin446):
        errors["gin446"] = (
            "Enter a valid HTTPS URL."
        )

    cleaned["gin446"] = gin446

    # -----------------------------------------------------
    # Major
    # -----------------------------------------------------

    major = form.get("major", "").strip().lower()

    if major and major not in MAJORS:
        errors["major"] = "Choose a valid major."

    cleaned["major"] = MAJOR_LABELS.get(major, major)

    # -----------------------------------------------------
    # GPA
    # -----------------------------------------------------

    gpa = form.get("gpa", "").strip()

    if gpa:
        gpa_number = to_number(gpa)

        if (
            gpa_number is None
            or not 40 <= gpa_number <= 100
        ):
            errors["gpa"] = (
                "GPA must be a number between 40 and 100."
            )

    cleaned["gpa"] = gpa

    # -----------------------------------------------------
    # Credits completed
    # -----------------------------------------------------

    credits = form.get("credits", "").strip()

    if credits:
        credits_number = to_int(credits)

        if (
            credits_number is None
            or not 0 <= credits_number <= 148
        ):
            errors["credits"] = (
                "Credits must be a whole number between 0 and 148."
            )

    cleaned["credits"] = credits

    # -----------------------------------------------------
    # Graduation season
    # -----------------------------------------------------

    graduation = form.get("graduation", "").strip().lower()

    if graduation and graduation not in GRADUATION:
        errors["graduation"] = (
            "Choose Spring, Summer or Fall."
        )

    cleaned["graduation"] = graduation

    # -----------------------------------------------------
    # Graduation month
    # -----------------------------------------------------

    graduation_month = form.get(
        "graduation_month", ""
    ).strip()

    if graduation_month and not MONTH.fullmatch(
        graduation_month
    ):
        errors["graduation_month"] = (
            "Use a valid month in YYYY-MM format."
        )

    cleaned["graduation_month"] = graduation_month

    # -----------------------------------------------------
    # Internship completed
    # -----------------------------------------------------

    internship = form.get(
        "internship_completed", ""
    ).strip().lower()

    if internship and internship not in YESNO:
        errors["internship_completed"] = (
            "Choose Yes or No."
        )

    cleaned["internship_completed"] = internship

    # -----------------------------------------------------
    # Programming language
    # -----------------------------------------------------

    language = form.get("language", "").strip()

    if len(language) > 40:
        errors["language"] = (
            "Language must be 40 characters or fewer."
        )

    cleaned["language"] = language

    # -----------------------------------------------------
    # Technical skills
    # -----------------------------------------------------

    submitted_skills = form.getlist("skills")

    valid_skills = []
    invalid_skills = []

    for skill in submitted_skills:
        if skill in SKILLS:
            valid_skills.append(skill)
        else:
            invalid_skills.append(skill)

    if invalid_skills:
        errors["skills"] = (
            "Unknown skill(s): "
            + ", ".join(invalid_skills)
        )

    cleaned["skills"] = valid_skills

    # -----------------------------------------------------
    # Engineering software
    # -----------------------------------------------------

    submitted_software = form.getlist("software")

    valid_software = []
    invalid_software = []

    for software in submitted_software:
        if software in SOFTWARE:
            valid_software.append(software)
        else:
            invalid_software.append(software)

    if invalid_software:
        errors["software"] = (
            "Unknown software: "
            + ", ".join(invalid_software)
        )

    cleaned["software"] = valid_software

    # -----------------------------------------------------
    # Project title
    # -----------------------------------------------------

    project_title = form.get("project_title", "").strip()

    if len(project_title) > 120:
        errors["project_title"] = (
            "Project title must be 120 characters or fewer."
        )

    cleaned["project_title"] = project_title

    # -----------------------------------------------------
    # Project area
    # -----------------------------------------------------

    project_area = form.get("project_area", "").strip()

    if (
        project_area
        and project_area.lower() not in PROJECT_AREAS
    ):
        errors["project_area"] = (
            "Choose a valid project area."
        )

    cleaned["project_area"] = project_area

    # -----------------------------------------------------
    # Project description
    # -----------------------------------------------------

    description = form.get("description", "").strip()

    if len(description) > 1000:
        errors["description"] = (
            "Description must be 1000 characters or fewer."
        )

    cleaned["description"] = description

    # -----------------------------------------------------
    # Team size
    # -----------------------------------------------------

    team_size = form.get("team_size", "").strip()

    if team_size:
        team_number = to_int(team_size)

        if (
            team_number is None
            or not 1 <= team_number <= 4
        ):
            errors["team_size"] = (
                "Team size must be a whole number from 1 to 4."
            )

    cleaned["team_size"] = team_size

    # -----------------------------------------------------
    # Project color
    # -----------------------------------------------------

    project_color = form.get("project_color", "").strip()

    if project_color and not HEXCOLOR.fullmatch(project_color):
        errors["project_color"] = (
            "Enter a valid hexadecimal color, such as #336699."
        )

    if not project_color:
        project_color = "#336699"

    cleaned["project_color"] = project_color

    # -----------------------------------------------------
    # Meeting date
    # -----------------------------------------------------

    meeting_date = form.get("meeting_date", "").strip()

    if meeting_date and parse_date(meeting_date) is None:
        errors["meeting_date"] = (
            "Enter a valid meeting date."
        )

    cleaned["meeting_date"] = meeting_date

    # -----------------------------------------------------
    # Meeting time
    # -----------------------------------------------------

    meeting_time = form.get("meeting_time", "").strip()

    if meeting_time:
        if not TIME.fullmatch(meeting_time):
            errors["meeting_time"] = (
                "Enter a valid time in HH:MM format."
            )

        elif not "08:00" <= meeting_time <= "18:00":
            errors["meeting_time"] = (
                "Meeting time must be between 08:00 and 18:00."
            )

    cleaned["meeting_time"] = meeting_time

    # -----------------------------------------------------
    # Confirmation
    # -----------------------------------------------------

    confirmation = form.get(
        "confirmation", ""
    ).strip().lower()

    if confirmation not in {"yes", "on", "true", "1"}:
        errors["confirmation"] = (
            "You must confirm that the information is accurate."
        )

    cleaned["confirmation"] = confirmation

    # -----------------------------------------------------
    # Hidden form version
    # -----------------------------------------------------

    cleaned["form_version"] = form.get(
        "form_version", ""
    ).strip()

    # -----------------------------------------------------
    # Return errors and cleaned values
    # -----------------------------------------------------

    return errors, cleaned